"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  {
    number: 50000,
    suffix: '+',
    label: 'Databases Created',
    description: 'Production databases running worldwide'
  },
  {
    number: 99.99,
    suffix: '%',
    label: 'Uptime SLA',
    description: 'Guaranteed availability with automatic failover'
  },
  {
    number: 11,
    suffix: '',
    label: 'Global Regions',
    description: 'Deploy closer to your users'
  },
  {
    number: 5,
    suffix: 'ms',
    label: 'Query Latency',
    description: 'Lightning-fast response times'
  }
]

function Counter({ number, suffix, duration = 2000 }: { number: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      if (suffix === '%') {
        setCount(Math.floor(progress * number * 100) / 100)
      } else {
        setCount(Math.floor(progress * number))
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isVisible, number, duration, suffix])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
        {suffix === '%' ? count.toFixed(2) : count.toLocaleString()}{suffix}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by developers worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of companies building on our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Counter number={stat.number} suffix={stat.suffix} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
