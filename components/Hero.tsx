"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Globe, Database } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 rounded-full px-4 py-2 mb-6"
        >
          <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Instant PostgreSQL databases in seconds
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          The Modern Way to
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 animate-gradient">
            Host PostgreSQL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          Serverless PostgreSQL with autoscaling, branching, and bottomless storage.
          Start with a generous free tier and scale to millions of users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            View Documentation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-500" />
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-blue-500" />
            <span>11 Global Regions</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span>5ms Query Latency</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 blur-3xl opacity-20 -z-10"></div>
        <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-white/20 dark:border-gray-700/50">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 rounded-full px-6 py-3 mb-6">
              <Database className="h-6 w-6 text-blue-400" />
              <span className="text-blue-100 font-medium">Dashboard Preview</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Powerful Database Management
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Monitor performance, manage connections, and scale your databases with our intuitive dashboard.
              Real-time metrics and one-click operations make database management effortless.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
