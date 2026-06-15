export type ProjectCategory = "Full-Stack" | "Backend" | "Frontend";

export type AboutHighlightIconName =
  | "code-2"
  | "layers-3"
  | "briefcase-business"
  | "rocket";

export type ContactIconName = "mail" | "phone" | "github" | "linkedin";

export type EducationIconName = "graduation-cap" | "award";

export type ExperienceIconName = "briefcase-business";

export interface PersonalInfo {
  name: string;
  role: string;
  heroBadge: string;
  heroDescription: string;
  profileImage: string;
  footerDescription: string;
  copyright: string;
  metadataTitle: string;
  metadataDescription: string;
}

export interface AboutHighlight {
  icon: AboutHighlightIconName;
  title: string;
  text: string;
}

export interface AboutSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  highlights: AboutHighlight[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image: string;
  github?: string;
  liveDemo?: string;
}

export interface ProjectsSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  items: ProjectItem[];
}

export interface CertificationItem {
  title: string;
  issuer: {
    name: string;
    websiteUrl: string;
  };
  date: string;
  credentialUrl: string;
  badgeImage: string;
  description: string;
}

export interface CertificationsSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  items: CertificationItem[];
}

export interface ExperienceItem {
  role: string;
  period: string;
  points: string[];
  icon: ExperienceIconName;
}

export interface ExperienceSectionData {
  eyebrow: string;
  heading: string;
  items: ExperienceItem[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SkillsSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  categories: SkillCategory[];
}

export interface EducationItem {
  title: string;
  period: string;
  points: string[];
  icon: EducationIconName;
}

export interface EducationSectionData {
  eyebrow: string;
  heading: string;
  items: EducationItem[];
}

export interface ContactLink {
  icon: ContactIconName;
  label: string;
  value: string;
  href: string;
}

export interface ContactSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  detailsHeading: string;
  formHeading: string;
  formPlaceholders: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  formButtonLabel: string;
  links: ContactLink[];
}

export interface SocialLink {
  icon: ContactIconName;
  label: string;
  href: string;
}

export interface FooterQuickLink {
  id: string;
  label: string;
}

export interface FooterData {
  quickLinks: FooterQuickLink[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutSectionData;
  projects: ProjectsSectionData;
  certifications: CertificationsSectionData;
  experience: ExperienceSectionData;
  skills: SkillsSectionData;
  education: EducationSectionData;
  contact: ContactSectionData;
  socialLinks: SocialLink[];
  footer: FooterData;
}
