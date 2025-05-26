import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}))

describe('Components', () => {
  describe('Hero Component', () => {
    it('renders hero section with main heading', () => {
      render(<Hero />)
      expect(screen.getByText('The Modern Way to')).toBeInTheDocument()
      expect(screen.getByText('Host PostgreSQL')).toBeInTheDocument()
    })

    it('renders call-to-action buttons', () => {
      render(<Hero />)
      expect(screen.getByText('Start Free')).toBeInTheDocument()
      expect(screen.getByText('View Documentation')).toBeInTheDocument()
    })
  })

  describe('Features Component', () => {
    it('renders features section', () => {
      render(<Features />)
      expect(screen.getByText('Everything you need to build at scale')).toBeInTheDocument()
    })

    it('renders feature cards', () => {
      render(<Features />)
      expect(screen.getByText('Instant Provisioning')).toBeInTheDocument()
      expect(screen.getByText('Database Branching')).toBeInTheDocument()
      expect(screen.getByText('Enterprise Security')).toBeInTheDocument()
    })
  })

  describe('Stats Component', () => {
    it('renders stats section', () => {
      render(<Stats />)
      expect(screen.getByText('Trusted by developers worldwide')).toBeInTheDocument()
    })

    it('renders stat items', () => {
      render(<Stats />)
      expect(screen.getByText('Databases Created')).toBeInTheDocument()
      expect(screen.getByText('Uptime SLA')).toBeInTheDocument()
      expect(screen.getByText('Global Regions')).toBeInTheDocument()
    })
  })

  describe('Pricing Component', () => {
    it('renders pricing section', () => {
      render(<Pricing />)
      expect(screen.getByText('Simple, transparent pricing')).toBeInTheDocument()
    })

    it('renders pricing plans', () => {
      render(<Pricing />)
      expect(screen.getByText('Starter')).toBeInTheDocument()
      expect(screen.getByText('Pro')).toBeInTheDocument()
      expect(screen.getByText('Enterprise')).toBeInTheDocument()
    })
  })

  describe('CTA Component', () => {
    it('renders call-to-action section', () => {
      render(<CTA />)
      expect(screen.getByText('Ready to build something amazing?')).toBeInTheDocument()
    })
  })

  describe('Footer Component', () => {
    it('renders footer with brand', () => {
      render(<Footer />)
      expect(screen.getByText('PostgreDB')).toBeInTheDocument()
    })

    it('renders footer links', () => {
      render(<Footer />)
      expect(screen.getByText('Product')).toBeInTheDocument()
      expect(screen.getByText('Company')).toBeInTheDocument()
      expect(screen.getByText('Resources')).toBeInTheDocument()
    })
  })
})
