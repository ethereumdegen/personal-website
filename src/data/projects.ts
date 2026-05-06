export interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    name: 'Metalcraft',
    description: 'Agent orchestration framework for composing multi-step AI workflows with tool use, memory, and structured outputs.',
    tags: ['Rust', 'AI Agents', 'Orchestration'],
    github: 'https://github.com/rust4ai/metalcraft',
  },
  {
    name: 'Spice',
    description: 'Testing framework for AI agents — deterministic evaluation harness for agent behavior, tool calls, and output quality.',
    tags: ['Rust', 'Testing', 'AI Agents'],
    github: 'https://github.com/rust4ai/spice',
  },
  {
    name: 'StarkBot CLI',
    description: 'Terminal-native AI agent with shell integration, file operations, and conversational coding assistance.',
    tags: ['Rust', 'CLI', 'AI Agent'],
    github: 'https://github.com/Starkbotai/starkbot-cli',
  },
  {
    name: 'Inference Proxy Server',
    description: 'Enterprise LLM proxy server with load balancing, rate limiting, caching, and multi-provider routing.',
    tags: ['Rust', 'Infrastructure', 'LLM'],
    github: 'https://github.com/rust4ai/inference-proxy-server',
  },
  {
    name: 'Metalcraft Agent',
    description: 'Reference implementation of a production agent built on the Metalcraft framework — demonstrates real-world patterns.',
    tags: ['Rust', 'AI Agent', 'Reference'],
    github: 'https://github.com/rust4ai/metalcraft-agent',
  },
  {
    name: 'Starflask',
    description: 'Full-stack web application framework — modern, fast, and batteries-included.',
    tags: ['Web', 'Framework', 'Full-Stack'],
    live: 'https://starflask.com',
  },
  {
    name: 'rust4all-template',
    description: 'Full-stack project template with Rust backend, React frontend, CI/CD, and deployment configs ready to go.',
    tags: ['Rust', 'React', 'Template'],
    github: 'https://github.com/rust4ai/rust4all-template',
  },
  {
    name: 'knowledgebase-agent',
    description: 'Vectorless RAG agent — retrieves and synthesizes knowledge without embedding databases using smart chunking and re-ranking.',
    tags: ['Python', 'RAG', 'AI Agent'],
    github: 'https://github.com/rust4ai/knowledgebase-agent',
  },
]
