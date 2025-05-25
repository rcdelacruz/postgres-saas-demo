"use client"

import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Database, 
  GitBranch, 
  Clock, 
  Globe,
  BarChart,
  Code,
  Cloud
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Provisioning',
    description: 'Create production-ready PostgreSQL databases in under 3 seconds. No waiting for infrastructure.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
  },
  {
    icon: GitBranch,
    title: 'Database Branching',
    description: 'Create instant copy-on-write branches of your database for development and testing.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption, VPC isolation, and automated backups.',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    icon: Cloud,
    title: 'Serverless Scaling',
    description: 'Automatically scale compute and storage based on your workload. Pay only for what you use.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: Clock,
    title: 'Point-in-Time Recovery',
    description: 'Restore your database to any point in time with second-level granularity.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    description: 'Deploy in 11 regions worldwide with automatic replication and failover.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    icon: BarChart,
    title: 'Real-time Analytics',
    description: 'Monitor query performance, resource usage, and database health in real-time.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Native support for all PostgreSQL extensions. Full SQL compatibility.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20'
  },
  {
    icon: Database,
    title: 'Bottomless Storage',
    description: 'Unlimited storage that grows with your data. No need to provision disk space.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to build at scale
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Built on Kubernetes with CloudNativePG, delivering enterprise-grade PostgreSQL hosting with modern developer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}