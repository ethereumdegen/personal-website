import { motion } from 'framer-motion'

const stats = [
  { value: '100+', label: 'Customer Deployments' },
  { value: '6K+', label: 'Miles/Year as FDE' },
  { value: '5+', label: 'Production Agents Shipped' },
  { value: '3', label: 'Consulting Clients' },
]

const techStack = [
  'Rust', 'TypeScript', 'Python', 'React', 'Node.js',
  'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GCP',
  'LLM APIs', 'Agent Frameworks', 'Voice AI', 'RAG',
  'CI/CD', 'Terraform',
]

export default function About() {
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
          About
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-[0.95] uppercase mb-16 max-w-4xl"
        >
          Engineer with a
          bias for shipping.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-text-secondary leading-relaxed"
          >
            <p>
              I'm Andrew — a software engineer who builds production AI agent systems in Rust.
              My background spans field engineering, infrastructure, and full-stack development,
              with deep experience deploying enterprise software across 100+ customer environments.
            </p>
            <p>
              As a Field Deployment Engineer, I traveled 6,000+ miles a year deploying and
              troubleshooting complex systems on-site. That experience gave me an obsession
              with reliability, observability, and shipping software that actually works in
              the real world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-text-secondary leading-relaxed"
          >
            <p>
              Now I build agentic AI systems — from orchestration frameworks and testing harnesses
              to enterprise LLM proxies and voice automation platforms. I also consult for
              companies integrating AI agents into their workflows, saving teams hours of
              manual work every week.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="bg-bg p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{stat.value}</div>
              <div className="text-text-muted text-xs uppercase tracking-[0.15em]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-text-muted mb-8">Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * i }}
                className="px-4 py-2 text-sm border border-border rounded-full text-text-secondary hover:text-text hover:border-text transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Resume download */}
        <div className="border-t border-border pt-12">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 text-sm text-text-muted hover:text-text transition-colors"
          >
            <span>&darr;</span>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </motion.div>
  )
}
