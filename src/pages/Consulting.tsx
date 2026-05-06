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
    result: '5+ hrs/week saved',
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
      transition={{ duration: 0.3 }}
      className="pt-28 pb-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-xs uppercase tracking-[0.3em] mb-8"
        >
          Consulting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-[0.95] uppercase mb-6 max-w-4xl"
        >
          Let's build your AI stack.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-text-secondary text-base max-w-xl mb-20"
        >
          I help teams integrate production-grade AI agents into their workflows —
          from architecture to deployment.
        </motion.p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-bg p-8"
            >
              <h3 className="text-lg font-semibold tracking-tight mb-4">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Source Tools */}
        <h2 className="text-xs uppercase tracking-[0.3em] text-text-muted mb-8">Open Source Tools</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border border-border p-8 mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
            <h3 className="text-xl font-semibold tracking-tight">Knowledgebase Agent</h3>
            <a
              href="https://github.com/rust4ai/knowledgebase-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              github.com/rust4ai/knowledgebase-agent &rarr;
            </a>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            Vectorless RAG agent that retrieves and synthesizes knowledge without embedding databases.
            Uses pageIndex on custom materials to enable precise, chunk-level retrieval over your own
            documents — smart chunking and re-ranking without the overhead of vector infrastructure.
          </p>
        </motion.div>

        {/* Case Studies */}
        <h2 className="text-xs uppercase tracking-[0.3em] text-text-muted mb-8">Case Studies</h2>

        <div className="border-b border-border mb-24">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="border-t border-border py-8 flex flex-col md:flex-row md:items-baseline gap-4"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight mb-2">{study.client}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{study.description}</p>
              </div>
              <div className="shrink-0">
                <span className="text-sm font-medium">{study.result}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to ship?</h2>
          <p className="text-text-secondary mb-10 max-w-md mx-auto">
            Whether you need an agent framework, voice pipeline, or full automation stack —
            let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-text text-bg text-sm font-medium rounded-full hover:opacity-80 transition-opacity"
          >
            Get in Touch &rarr;
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
