export interface Stat {
  label: string
  level: string
  width: string
}

export interface Project {
  stage: string
  title: string
  description: string
  tags: string[]
}

export interface SocialLinks {
  github: string
  linkedin: string
  email: string
}

export interface SiteConfig {
  name: string
  stack: string[]
  stats: Stat[]
  inventory: string[]
  projects: Project[]
  socials: SocialLinks
}

export interface ConfigContextValue {
  config: SiteConfig | null
  isLoading: boolean
  error: string | null
}
