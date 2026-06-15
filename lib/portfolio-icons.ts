import type { LucideIcon } from "lucide-react";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Phone,
  Rocket,
} from "lucide-react";
import type {
  AboutHighlightIconName,
  ContactIconName,
  EducationIconName,
  ExperienceIconName,
} from "@/types/portfolio";

export const aboutHighlightIcons: Record<AboutHighlightIconName, LucideIcon> = {
  "briefcase-business": BriefcaseBusiness,
  "code-2": Code2,
  "layers-3": Layers3,
  rocket: Rocket,
};

export const contactIcons: Record<ContactIconName, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
};

export const educationIcons: Record<EducationIconName, LucideIcon> = {
  award: Award,
  "graduation-cap": GraduationCap,
};

export const experienceIcons: Record<ExperienceIconName, LucideIcon> = {
  "briefcase-business": BriefcaseBusiness,
};
