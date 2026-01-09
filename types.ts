
export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'other';
}
