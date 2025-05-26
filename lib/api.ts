const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.postgredb.com'

export interface Database {
  id: string
  name: string
  status: 'active' | 'inactive' | 'creating' | 'error'
  region: string
  storage: number
  memory: number
  connections: number
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  email: string
  name: string
  plan: 'starter' | 'pro' | 'enterprise'
  createdAt: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

class ApiClient {
  private baseUrl: string
  private token: string | null = null

  constructor(baseUrl: string = API_URL) {
    this.baseUrl = baseUrl

    // Get token from localStorage if available
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('auth_token')
    }
  }

  setToken(token: string) {
    this.token = token
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token)
    }
  }

  clearToken() {
    this.token = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token')
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred')
      }

      return data
    } catch (error) {
      throw error instanceof Error ? error : new Error('Network error')
    }
  }

  // Auth methods
  async login(email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  async signup(email: string, password: string, name: string): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    })
  }

  async logout(): Promise<void> {
    this.clearToken()
  }

  // User methods
  async getProfile(): Promise<ApiResponse<User>> {
    return this.request('/user/profile')
  }

  async updateProfile(data: Partial<User>): Promise<ApiResponse<User>> {
    return this.request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // Database methods
  async getDatabases(): Promise<ApiResponse<Database[]>> {
    return this.request('/databases')
  }

  async getDatabase(id: string): Promise<ApiResponse<Database>> {
    return this.request(`/databases/${id}`)
  }

  async createDatabase(data: {
    name: string
    region: string
    memory: number
  }): Promise<ApiResponse<Database>> {
    return this.request('/databases', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateDatabase(id: string, data: Partial<Database>): Promise<ApiResponse<Database>> {
    return this.request(`/databases/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteDatabase(id: string): Promise<ApiResponse<void>> {
    return this.request(`/databases/${id}`, {
      method: 'DELETE',
    })
  }

  // Analytics methods
  async getDatabaseMetrics(id: string, timeRange: string = '24h'): Promise<ApiResponse<any>> {
    return this.request(`/databases/${id}/metrics?range=${timeRange}`)
  }
}

export const api = new ApiClient()
export default api
