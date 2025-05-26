"use client"

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for side projects and learning',
    features: [
      '1 database',
      '1 GB storage',
      '100 MB RAM',
      'Community support',
      'Basic monitoring',
      '7-day backups'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'For growing applications and teams',
    features: [
      '5 databases',
      '100 GB storage',
      '4 GB RAM',
      'Email support',
      'Advanced monitoring',
      '30-day backups',
      'Database branching',
      'Point-in-time recovery'
    ],
    cta: 'Start Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'For mission-critical applications',
    features: [
      'Unlimited databases',
      '1 TB storage',
      '32 GB RAM',
      'Priority support',
      'Custom monitoring',
      '90-day backups',
      'Advanced branching',
      'High availability',
      'VPC isolation',
      'SOC 2 compliance'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border-2 border-blue-500 shadow-xl'
                  : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-colors ${
                  plan.popular
                    ? 'text-white bg-blue-600 hover:bg-blue-700'
                    : 'text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400">
            All plans include SSL certificates, automatic backups, and 24/7 monitoring.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
