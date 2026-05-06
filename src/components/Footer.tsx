import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-text-muted text-xs">
          &copy; {new Date().getFullYear()} Andrew Mazzola
        </div>
        <div className="flex items-center gap-6">
          <Link to="/projects" className="text-xs text-text-muted hover:text-text transition-colors">
            Projects
          </Link>
          <Link to="/consulting" className="text-xs text-text-muted hover:text-text transition-colors">
            Consulting
          </Link>
          <a
            href="https://github.com/andrewmazzola"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:dev@andrewmazzola.com"
            className="text-xs text-text-muted hover:text-text transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
