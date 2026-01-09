
import { NavItem, Project, ExperienceItem, Skill } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Driver Monitoring AI',
    description: 'An end-to-end safety solution combining a computer vision mobile app with a cloud dashboard. It monitors driver fatigue and distraction in real-time, providing fleet managers with actionable safety analytics.',
    image: 'https://mocha-cdn.com/019a4e57-247b-7ec2-a538-40c7d5c17cda/driver-behavior-project.jpg',
    tags: ['React', 'Python', 'OpenCV', 'PostgreSQL'],
    link: 'https://dbmsystem.netlify.app/',
    github: '#'
  },
  {
    id: 2,
    title: 'StudentPesa',
    description: 'A fintech platform designed for the school ecosystem. It allows parents to securely fund student spending via NFC-enabled cards, eliminating cash risks and helping students build early financial discipline.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'NFC Tech', 'Fintech'],
    link: 'https://sp-landing-phi.vercel.app/',
    github: '#'
  },
  {
    id: 3,
    title: 'Gtopia Virtual Nation',
    description: 'A blockchain integrated virtual society on Solana. I developed the frontend architecture and integrated NFT-based land ownership modules and decentralized governance tools.',
    image: 'https://mocha-cdn.com/019a4e57-247b-7ec2-a538-40c7d5c17cda/gtopia-project.jpg',
    tags: ['Solana', 'Rust', 'Tailwind'],
    link: '#',
    github: 'https://github.com/shetou07/gtopia'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'NileBit Labs',
    role: 'COO & Lead Frontend Engineer',
    period: 'Nov 2024 - Present',
    description: [
      'Bridging the gap between business strategy and technical execution for complex SaaS products.',
      'Leading the frontend architecture for client projects, focusing on highly interactive and accessible React applications.'
    ],
    skills: ['Strategic Leadership', 'React', 'Next.js', 'Figma']
  },
  {
    company: 'Bank of Kigali',
    role: 'Software Developer Intern',
    period: 'May 2024 - Oct 2024',
    description: [
      'Contributed to internal staff management tools and experimented with machine learning models for predicting customer churn.',
      'Streamlined digital workflows within the visitor management system.'
    ],
    skills: ['Laravel', 'MySQL', 'Python', 'Scikit-Learn']
  },
  {
    company: 'Amekodi Mixed Farm',
    role: 'Web Developer',
    period: 'Nov 2023 - April 2024',
    description: [
      'Built a specialized CRM for farm operations, enabling better tracking of inventory and supply chain logistics.'
    ],
    skills: ['PHP', 'Laravel', 'Database Design']
  },
  {
    company: 'Raining Vegetables',
    role: 'Junior Frontend Developer',
    period: 'Jan 2022 - Feb 2023',
    description: [
      'Refined the user experience of the core e-commerce platform, ensuring smooth navigation and mobile-first responsiveness.'
    ],
    skills: ['JavaScript', 'UI/UX', 'Responsive Design']
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Laravel / PHP', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Python', category:'backend' },
  { name: 'Figma', category: 'design' },
  { name: 'UI Systems', category: 'design' },
  { name: 'Docker', category: 'other' },
  { name: 'Technical Ops', category: 'other' },
];
