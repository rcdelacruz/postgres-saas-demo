"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Database, 
  Book, 
  Code, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const quickStartSteps = [
  {
    title: 'Create an Account',
    description: 'Sign up for a free PostgreDB account to get started.',
    icon: Database
  },
  {
    title: 'Create Your First Database',
    description: 'Use our dashboard or CLI to create a new PostgreSQL database.',
    icon: Zap
  },
  {
    title: 'Connect Your Application',
    description: 'Get your connection string and start building.',
    icon: Code
  }
]

const docSections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of PostgreDB and create your first database.',
    icon: Book,
    links: [
      { name: 'Quick Start Guide', href: '/docs/quickstart' },
      { name: 'Creating Databases', href: '/docs/databases' },
      { name: 'Connection Strings', href: '/docs/connections' },
      { name: 'First Query', href: '/docs/first-query' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete reference for the PostgreDB REST API.',
    icon: Code,
    links: [
      { name: 'Authentication', href: '/docs/api/auth' },
      { name: 'Databases', href: '/docs/api/databases' },
      { name: 'Users', href: '/docs/api/users' },
      { name: 'Metrics', href: '/docs/api/metrics' }
    ]
  },
  {
    title: 'Features',
    description: 'Explore advanced PostgreDB features and capabilities.',
    icon: Zap,
    links: [
      { name: 'Database Branching', href: '/docs/branching' },
      { name: 'Point-in-Time Recovery', href: '/docs/recovery' },
      { name: 'Auto-scaling', href: '/docs/scaling' },
      { name: 'Monitoring', href: '/docs/monitoring' }
    ]
  },
  {
    title: 'Security',
    description: 'Learn about PostgreDB security features and best practices.',
    icon: Shield,
    links: [
      { name: 'Authentication', href: '/docs/security/auth' },
      { name: 'Encryption', href: '/docs/security/encryption' },
      { name: 'VPC Isolation', href: '/docs/security/vpc' },
      { name: 'Compliance', href: '/docs/security/compliance' }
    ]
  },
  {
    title: 'Deployment',
    description: 'Deploy and manage your databases across regions.',
    icon: Globe,
    links: [
      { name: 'Regions', href: '/docs/deployment/regions' },
      { name: 'High Availability', href: '/docs/deployment/ha' },
      { name: 'Backup & Restore', href: '/docs/deployment/backup' },
      { name: 'Migration', href: '/docs/deployment/migration' }
    ]
  }
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Database className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">PostgreDB</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 dark:text-gray-400">Documentation</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            PostgreDB Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Everything you need to build, deploy, and scale with PostgreDB. 
            From quick start guides to advanced features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/docs/quickstart">
                Quick Start Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs/api">
                API Reference
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get Started in 3 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => (
              <Card key={step.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{index + 1}. {step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Documentation Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore the Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <section.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </div>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm flex items-center group"
                          >
                            {link.name}
                            <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to get started?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Create your first PostgreSQL database in seconds and start building your application.
              </p>
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Building Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
