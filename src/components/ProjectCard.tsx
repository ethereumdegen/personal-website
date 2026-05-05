import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="block group border-t border-border py-8 hover:pl-4 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:tracking-normal transition-all duration-300">
          {project.name}
        </h3>
        <div className="flex gap-2 shrink-0">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
        {project.description}
      </p>
    </motion.a>
  )
}
