/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum SectionId {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  EXPERIENCE = 'EXPERIENCE',
  EDUCATION = 'EDUCATION',
  PROJECTS = 'PROJECTS',
  ACTIVITIES = 'ACTIVITIES',
  AWARDS = 'AWARDS',
  CONTACT = 'CONTACT',
}

export interface SkillNode {
  id: string;
  label: string;
  level: number; // 0-100
  x: number; // percentage coordinate inside container
  y: number; // percentage coordinate inside container
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // lucide icon name
  color: 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose';
  nodes: SkillNode[];
  subTags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  type?: string; 
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeLabel: string;
  specializations: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  thumbnailType: 'excel' | 'python' | 'powerbi' | 'finsight' | 'uber';
  tags: string[];
  repoUrl: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  badge?: string;
  date: string;
  location: string;
  description: string;
  icon: string;
}

export interface AwardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  iconType: 'academic' | 'challenge';
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  fileName: string;
}

