"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust PostgreDB for their mission-critical applications.
            Start with our generous free tier today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Start Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Documentation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-blue-100"
        >
          <div className="flex flex-col items-center">
            <Zap className="h-8 w-8 mb-2" />
            <span className="font-medium">Deploy in seconds</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-8 w-8 mb-2" />
            <span className="font-medium">Enterprise security</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 mb-2" />
            <span className="font-medium">24/7 support</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
