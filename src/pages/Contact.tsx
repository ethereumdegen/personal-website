import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-28 pb-20 px-6 md:px-12"
    >
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-xs uppercase tracking-[0.3em] mb-8"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-[0.95] uppercase mb-6"
        >
          Get in touch.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-text-secondary text-base mb-16"
        >
          Have a project in mind, want to collaborate, or just want to say hi?
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-border p-12 text-center"
          >
            <h2 className="text-2xl font-semibold tracking-tight mb-3">Message received.</h2>
            <p className="text-text-secondary text-sm">I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-text-muted mb-3">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-border text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-text-muted mb-3">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-border text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-text-muted mb-3">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-border text-text placeholder-text-muted focus:outline-none focus:border-text transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-text text-bg text-sm font-medium rounded-full hover:opacity-80 transition-opacity mt-4"
            >
              Send Message &rarr;
            </button>
          </motion.form>
        )}

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="https://github.com/andrewmazzola"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="mailto:dev@andrewmazzola.com"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            dev@andrewmazzola.com
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            &darr; Resume PDF
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
