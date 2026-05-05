import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
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
          Projects
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-[0.95] uppercase mb-6 max-w-3xl"
        >
          Things I've built.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-text-secondary text-base max-w-xl mb-16"
        >
          Open-source tools, frameworks, and production systems — mostly Rust, mostly agents.
        </motion.p>

        <div className="border-b border-border">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
