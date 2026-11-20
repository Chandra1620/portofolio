export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category:
    | "Web App"
    | "SPK & Algoritma"
    | "Magang Industri"
    | "Frontend & UI"
    | "Landing Page"
    | "Company Profile"
    | "UI/UX Design"
    | "Open Source"
    | string;
  client: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  stack: string[];
  thumbnail: string;
  featured: boolean;
  metrics: string[];
  summary: string;
  liveUrl?: string;
  repoUrl?: string;
  figmaUrl?: string;
  caseStudy?: {
    overview: string;
    problem: string;
    objectives: string[];
    process: {
      step: string;
      title: string;
      description: string;
    }[];
    technicalDecisions: {
      decision: string;
      reason: string;
      alternative: string;
    }[];
    keyFeatures: {
      title: string;
      description: string;
    }[];
    challenges: {
      issue: string;
      solution: string;
    }[];
    results: {
      metric: string;
      description: string;
    }[];
    lessonsLearned: string;
    gallery: {
      title: string;
      caption: string;
      image: string;
    }[];
  };
}

export interface ServicePackage {
  id: string;
  title: string;
  badge: string;
  targetAudience: string;
  description: string;
  features: string[];
  duration: string;
  startingPrice: string;
  popular?: boolean;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: "Mahir" | "Menengah" | "Dasar" | "Sedang dipelajari";
    icon?: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "Full-time" | "Freelance" | "Internship" | "Contract";
  description: string;
  achievements: string[];
  stack: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  gpa: string;
  details: string;
}

export interface CertificationItem {
  year: string;
  name: string;
  issuer: string;
  credentialUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage?: string;
  content: {
    tableOfContents: { id: string; text: string }[];
    intro: string;
    sections: {
      id: string;
      heading: string;
      body: string;
      codeSnippet?: {
        language: string;
        code: string;
      };
    }[];
    takeaways: string[];
  };
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
}
