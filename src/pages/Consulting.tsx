import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Agentic Workflows',
    description: 'Design and build AI agent systems that automate complex, multi-step business processes with tool use and human-in-the-loop oversight.',
  },
  {
    title: 'Voice Infrastructure',
    description: 'End-to-end voice AI pipelines — telephony integration, real-time transcription, voice agents, and automated call handling.',
  },
  {
    title: 'Media Automation',
    description: 'Automated content pipelines, social media management, and AI-powered media workflows that save teams hours every week.',
  },
]

const caseStudies = [
  {
    client: 'Mod Technologies',
    result: '5+ hours/week saved',
    description: 'Built automated agentic workflows for internal operations, replacing manual processes with AI-driven task orchestration.',
  },
  {
    client: 'Vix Automation',
    result: 'Voice SaaS platform',
    description: 'Designed and shipped a full voice automation platform — from telephony infrastructure to AI agent integration and customer dashboard.',
  },
  {
    client: 'Stark Agent',
    result: 'Production CLI agent',
    description: 'Developed a terminal-native AI agent with deep shell integration, file operations, and multi-provider LLM routing for developer workflows.',
  },
]

export default function Consulting() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-28 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-sm uppercase tracking-[0.2em] mb-4"
        >
          Consulting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Let's build your <span className="gradient-text">AI stack.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-text-secondary text-lg max-w-2xl mb-16"
        >
          I help teams integrate production-grade AI agents into their workflows —
          from architecture to deployment.
        </motion.p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-tight mb-8"
        >
          Case Studies
        </motion.h2>

        <div className="space-y-5 mb-20">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="glass-card p-6 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{study.client}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{study.description}</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block px-4 py-2 bg-accent-purple/10 text-accent-purple text-sm font-medium rounded-lg border border-accent-purple/20">
                  {study.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to ship your AI project?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Whether you need an agent framework, voice pipeline, or full automation stack —
            let's talk about what you're building.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-sm"
          >
            Let's Work Together
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
