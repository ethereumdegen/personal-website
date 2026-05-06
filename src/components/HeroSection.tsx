import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-end pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-text-muted text-xs uppercase tracking-[0.3em] mb-8"
        >
          AI Native Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[clamp(3rem,10vw,9rem)] font-bold tracking-[-0.04em] leading-[0.9] uppercase mb-12"
        >
          Andrew
          <br />
          Mazzola
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-text-secondary text-base max-w-md mb-10 leading-relaxed"
        >
          I design and ship agent orchestration frameworks, enterprise LLM infrastructure,
          and custom engineered solutions from zero to production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center gap-6"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text text-bg text-sm font-medium rounded-full hover:opacity-80 transition-opacity"
          >
            View Projects &rarr;
          </Link>
          <a
            href="/resume.pdf"
            download
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Download Resume
          </a>
          <a
            href="mailto:dev@andrewmazzola.com"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            dev@andrewmazzola.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
