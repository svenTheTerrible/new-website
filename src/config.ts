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
  demo?: string
  code?: string
}

export interface SocialLink {
  label: string
  url: string
}

interface AboutMe {
  text1: string
  text2: string
}

export interface SiteConfig {
  name: string
  stack: string[]
  stats: Stat[]
  inventory: string[]
  projects: Project[]
  socials: SocialLink[]
  aboutMe: AboutMe
}

export interface ConfigContextValue {
  config: SiteConfig | null
  isLoading: boolean
  error: string | null
}
