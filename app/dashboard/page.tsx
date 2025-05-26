"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Database,
  Plus,
  Settings,
  BarChart3,
  Users,
  CreditCard,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Home,
  Activity,
  FileText,
  HelpCircle,
  LogOut,
  User,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useClickOutside } from '@/lib/hooks'

const mockDatabases = [
  {
    id: '1',
    name: 'production-db',
    status: 'active',
    region: 'us-east-1',
    storage: '2.4 GB',
    memory: '4 GB',
    connections: 12,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'staging-db',
    status: 'active',
    region: 'us-west-2',
    storage: '1.2 GB',
    memory: '2 GB',
    connections: 3,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    name: 'dev-db',
    status: 'inactive',
    region: 'eu-west-1',
    storage: '512 MB',
    memory: '1 GB',
    connections: 0,
    createdAt: '2024-01-25'
  }
]

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  plan: 'Pro',
  avatar: 'JD'
}

const sidebarItems = [
  { name: 'Overview', href: '/dashboard', icon: Home, current: true },
  { name: 'Databases', href: '/dashboard/databases', icon: Database, current: false },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3, current: false },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCard, current: false },
  { name: 'Activity', href: '/dashboard/activity', icon: Activity, current: false },
  { name: 'Documentation', href: '/docs', icon: FileText, current: false },
  { name: 'Support', href: '/dashboard/support', icon: HelpCircle, current: false },
]

export default function DashboardPage() {
  const [databases] = useState(mockDatabases)
  const [searchTerm, setSearchTerm] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const userMenuRef = useClickOutside<HTMLDivElement>(() => {
    setUserMenuOpen(false)
  })

  const filteredDatabases = databases.filter(db =>
    db.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'inactive':
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20'
      default:
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
    }
  }

  const handleLogout = () => {
    // Clear any stored tokens/session data
    localStorage.removeItem('auth_token')
    // Redirect to login page
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:flex lg:flex-col`}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <Database className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <span className="font-bold text-xl text-gray-900 dark:text-white truncate">PostgreDB</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 flex-shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 mt-6 px-3 overflow-y-auto">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${item.current
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* User section at bottom */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {mockUser.avatar}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {mockUser.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {mockUser.plan} Plan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Header */}
      <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16">
        <div className="flex items-center justify-between h-full px-4 sm:px-6">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden mr-4 p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">
              <Bell className="h-5 w-5" />
            </button>

            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">{mockUser.avatar}</span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {mockUser.name}
                </span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{mockUser.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{mockUser.email}</p>
                    </div>
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <User className="mr-3 h-4 w-4" />
                      Profile
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Settings className="mr-3 h-4 w-4" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col min-h-screen pt-16">
        {/* Main content area */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Welcome section */}
          <div className="mb-6 lg:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, {mockUser.name}!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Here's what's happening with your databases today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Databases</CardTitle>
                <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{databases.length}</div>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                  +2 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Connections</CardTitle>
                <div className="h-8 w-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {databases.reduce((sum, db) => sum + db.connections, 0)}
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                  +12% from last hour
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Storage Used</CardTitle>
                <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.1 GB</div>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                  +5% from last week
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Cost</CardTitle>
                <div className="h-8 w-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">$29.00</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Pro plan
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Databases Section */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Your Databases</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                    Manage and monitor your PostgreSQL databases
                  </CardDescription>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  New Database
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search databases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-10"
                  />
                </div>
                <Button variant="outline" className="sm:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Database List */}
              <div className="space-y-3">
                {filteredDatabases.map((database, index) => (
                  <motion.div
                    key={database.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 lg:p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 bg-white dark:bg-gray-800"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4 min-w-0 flex-1">
                        <div className="flex-shrink-0">
                          <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${database.status === 'active'
                            ? 'bg-green-100 dark:bg-green-900/20'
                            : 'bg-gray-100 dark:bg-gray-900/20'
                            }`}>
                            <Database className={`h-6 w-6 ${database.status === 'active'
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-gray-500'
                              }`} />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                            {database.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Created {new Date(database.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between lg:justify-end space-x-3 flex-shrink-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(database.status)}`}>
                          {database.status}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                            Connect
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Database metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="text-center lg:text-left">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium mb-1">Region</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{database.region}</p>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium mb-1">Storage</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{database.storage}</p>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium mb-1">Memory</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{database.memory}</p>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium mb-1">Connections</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{database.connections}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredDatabases.length === 0 && (
                <div className="text-center py-16">
                  <div className="h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No databases found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                    {searchTerm ? 'Try adjusting your search terms.' : 'Get started by creating your first database.'}
                  </p>
                  {!searchTerm && (
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Database
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
