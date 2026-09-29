export interface SkillItem {
  id: string;
  name: string;
  category: 'programming' | 'ai_data' | 'systems' | 'professional';
  proficiencyLabel: string;
  description: string;
  topics: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface ProjectComponent {
  name: string;
  role: string;
  specs: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  overview: string[];
  components: ProjectComponent[];
  techStack: string[];
  features: string[];
  image: string;
  category: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  credentialName: string;
  skillsAcquired: string[];
  summary: string;
  image?: string;
  date: string;
  credentialId?: string;
}

export interface JourneyMilestone {
  id: string;
  phase: string;
  domain: string;
  title: string;
  description: string;
  technologies: string[];
  keyTakeaways: string[];
}
