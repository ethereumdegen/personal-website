export interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    name: 'Starflask',
    description: 'AI-powered creative platform for generating presentations, documents, reports, images, and video — with custom DSLs and a Rust/React stack.',
    tags: ['AI', 'Rust', 'React', 'SaaS'],
    live: 'https://starflask.com',
  },
  {
    name: 'Starflask Digital',
    description: 'Consulting website for Starflask Digital — software consulting and development services.',
    tags: ['Consulting', 'Web'],
    live: 'https://starflaskdigital.com',
  },
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
    name: 'Teller Finance — Lending Pools',
    description: 'Decentralized lending pools system enabling permissionless, composable lending and borrowing on-chain.',
    tags: ['DeFi', 'Solidity', 'Lending'],
    live: 'https://teller.org',
  },
  {
    name: 'rust4all-template',
    description: 'Full-stack project template with Rust backend, React frontend, CI/CD, and deployment configs ready to go.',
    tags: ['Rust', 'React', 'Template'],
    github: 'https://github.com/rust4ai/rust4all-template',
  },
]
