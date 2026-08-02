/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SkillCategory, ExperienceItem, EducationItem, ProjectItem, ActivityItem, AwardItem, CertificateItem } from './types';

export const personalInfo = {
  name: 'CH. Ravi Teja',
  logoText: 'CRT.',
  fullName: 'CH. Ravi Teja | Data Analyst',
  title: 'Aspiring Data Analyst | Data Explorer @ Malla Reddy University',
  subtitle: 'Turning raw data into actionable insights for business decisions through rigorous analysis and clear visualization.',
  bioQuote: '"Specializing in identifying patterns that drive operational efficiency and revenue growth."',
  bioParagraph1: 'Currently pursuing Bachelor of Technology – Computer Science & Engineering (Data Science) at Malla Reddy University, Hyderabad, I maintain a strong academic focus with a 9.0 CGPA. My expertise lies in bridging the gap between raw data and executive strategy.',
  bioParagraph2: 'I am deeply committed to leveraging advanced analytics to solve complex organizational challenges and driving measurable growth. My goal is to transform data into a strategic asset that fuels innovation and operational efficiency across global markets.',
  gpa: '9.0 / 10',
  degree: 'B.Tech CSE - Data Science',
  university: 'Malla Reddy, HYD',
  careerGoal: 'Data Analyst',
  agenticAI: 'GDG Agentathon 2025 Participant (Guinness World Record Event).',
  biDashboards: 'Created Swiggy & IPL interactive dashboards in Excel and Power BI.',
  email: 'raviteja.challa017@email.com',
  location: 'India, Telangana, Hyderabad (Remote/Hybrid)',
  githubUrl: 'https://github.com/Raviteja0710',
  linkedinUrl: 'https://www.linkedin.com/in/raviteja017/',
  leetcodeUrl: 'https://leetcode.com/u/raviteja_0710/',
  hackerrankUrl: 'https://www.hackerrank.com/profile/raviteja_challa3',
  resumeUrl: '/resume.pdf',
};

export const competencies = [
  'Statistical Modeling',
  'Strategic Data Mining',
  'Predictive Analytics',
  'Data Storytelling',
  'Business Intelligence',
  'ETL Pipelines',
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'analytics',
    title: 'Data Analytics',
    subtitle: 'EXTRACTING INSIGHTS FROM STRUCTURED DATA',
    icon: 'Cpu',
    color: 'cyan',
    subTags: ['PYTHON', 'PANDAS', 'NUMPY'],
    nodes: [
      { id: 'da-1', label: 'Python', level: 100, x: 20, y: 70 },
      { id: 'da-2', label: 'Pandas', level: 100, x: 50, y: 30 },
      { id: 'da-3', label: 'NumPy', level: 100, x: 80, y: 80 },
    ],
  },
  {
    id: 'visualization',
    title: 'Data Visualization',
    subtitle: 'COMMUNICATING INSIGHTS THROUGH VISUALS',
    icon: 'BarChart',
    color: 'emerald',
    subTags: ['POWER BI', 'TABLEAU', 'MATPLOTLIB', 'SEABORN'],
    nodes: [
      { id: 'dv-1', label: 'Power BI', level: 100, x: 15, y: 65 },
      { id: 'dv-2', label: 'Matplotlib', level: 100, x: 45, y: 25 },
      { id: 'dv-3', label: 'Seaborn', level: 100, x: 52, y: 75 },
      { id: 'dv-4', label: 'Tableau', level: 80, x: 85, y: 45 },
    ],
  },
  {
    id: 'management',
    title: 'Data Management',
    subtitle: 'ORGANIZING, PROCESSING, AND INTEGRATING DATA',
    icon: 'Database',
    color: 'purple',
    subTags: ['SQL', 'EXCEL', 'ETL PIPELINES'],
    nodes: [
      { id: 'dm-1', label: 'SQL', level: 100, x: 20, y: 50 },
      { id: 'dm-2', label: 'Excel', level: 100, x: 50, y: 25 },
      { id: 'dm-3', label: 'ETL Pipelines', level: 100, x: 80, y: 65 },
    ],
  },
  {
    id: 'intelligence',
    title: 'Analytical Intelligence',
    subtitle: 'APPLYING STATISTICS AND EDA-DRIVEN THINKING',
    icon: 'Brain',
    color: 'amber',
    subTags: ['STATISTICS', 'EDA', 'ETL'],
    nodes: [
      { id: 'ai-1', label: 'Statistics', level: 100, x: 20, y: 45 },
      { id: 'ai-2', label: 'EDA', level: 100, x: 50, y: 65 },
      { id: 'ai-3', label: 'ETL', level: 100, x: 80, y: 35 },
    ],
  },
  {
    id: 'version_control',
    title: 'Version Control',
    subtitle: 'MANAGING CODE AND COLLABORATION EFFICIENTLY',
    icon: 'GitBranch',
    color: 'rose',
    subTags: ['GIT', 'GITHUB'],
    nodes: [
      { id: 'vc-1', label: 'Git', level: 80, x: 30, y: 40 },
      { id: 'vc-2', label: 'GitHub', level: 100, x: 70, y: 70 },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Student Ambassador',
    company: 'LetsUpgrade EdTech Pvt Ltd.',
    location: 'Remote',
    period: 'NOV 2025 - JAN 2026',
    description: 'Actively promoted platform programs to increase engagement and traffic through diverse channels, word-of-mouth, and creative student-outreach strategies. Participated in structured peer ambassador activities to showcase professional competence and coordinate campus-level events.',
    skills: ['Community Leadership', 'Creative Marketing', 'Outreach Strategy', 'Campus Coordination'],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology – Computer Science & Engineering (Data Science)',
    institution: 'Malla Reddy University, Hyderabad',
    period: '2023 - 2027',
    grade: '9.0 / 10',
    gradeLabel: 'CUMULATIVE GRADE POINT AVERAGE',
    specializations: [
      'Python',
      'Data Visualization (Power BI & Excel)',
      'Data Mining & ETL Processes',
      'Exploratory Data Analysis (EDA)',
      'Statistical Modeling',
      'Database Systems (SQL & MySQL)',
      'Business Intelligence',
      'Predictive Analytics',
      'Algorithmic Optimization',
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Swiggy Sales Dashboard - Excel',
    description: 'Interactive Excel dashboard tracking core KPIs like Total Sales, Average Rating, and Order Values. Built using Pivot Tables, charts, and slicers to analyze Veg vs Non-Veg mix and regional performance for business decisions.',
    thumbnailType: 'excel',
    tags: ['EXCEL', 'PIVOT TABLES', 'PIVOT CHARTS', 'SLICERS', 'KPI CARDS'],
    repoUrl: 'https://github.com/Raviteja0710/Swiggy_DashBoard_Excel',
  },
  {
    id: 'proj-4',
    title: 'Finance Analytics Dashboard - Power BI',
    description: 'Interactive Power BI dashboard analyzing financial transactions, customer behavior, and operational metrics. Tracks core KPIs with YoY growth trends and integrates dynamic slicers for real-time analytics across customer segments.',
    thumbnailType: 'finsight',
    tags: ['POWER BI', 'DAX', 'DATA MODELING', 'KPI CARDS', 'BUSINESS INTELLIGENCE'],
    repoUrl: 'https://github.com/Raviteja0710/Customers_Financial_Analysis',
  },
  {
    id: 'proj-3',
    title: 'Uber Trip Analysis - Power BI',
    description: 'Interactive Power BI dashboard analyzing Uber trip logistics, booking trends, and key performance metrics. Visualizes location-based pickup/dropoff distributions, vehicle utilization, and payment method statistics.',
    thumbnailType: 'uber',
    tags: ['POWER BI', 'DAX', 'DATA MODELING', 'LOCATION ANALYSIS', 'TIME ANALYSIS'],
    repoUrl: 'https://github.com/Raviteja0710/Uber_Trip_Analysis',
  },
];

export const activitiesList: ActivityItem[] = [
  {
    id: 'act-1',
    title: '{ AGENTATHON } 2025',
    badge: 'ID: GDG-236',
    date: 'December 20-21, 2025',
    location: 'Malla Reddy University, Hyderabad',
    description: 'Attended Agentathon 2025, the Guinness World Record breaking Agentic AI hackathon hosted by GDG Hyderabad.',
    icon: 'Brain',
  },
  {
    id: 'act-2',
    title: 'TECHNOSPLURGE 2K25',
    date: 'April 10–12, 2025',
    location: 'Malla Reddy University',
    description: 'Participated in the Emojencius logic challenge at the Department of Data Science tech fest.',
    icon: 'Sparkles',
  },
];

export const awardsList: AwardItem[] = [
  {
    id: 'aw-1',
    title: 'Academic Excellence Award',
    subtitle: 'MALLA REDDY UNIVERSITY',
    description: 'Top 10% of the batch for consistent performance in analytical subjects.',
    year: '2024',
    iconType: 'academic',
  },
  {
    id: 'aw-2',
    title: 'Data Challenge Finalist',
    subtitle: 'INTER-COLLEGE TECH FEST',
    description: 'Recognized as a finalist for building an interactive IPL (2008–2025) dashboard.',
    year: '2024',
    iconType: 'challenge',
  },
];

export const certificatesList: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Power BI & Fabric Restart Bootcamp',
    issuer: 'Hyderabad Data & AI Community | India Microsoft Fabric User Group',
    date: 'July 26-27, 2025',
    fileName: 'PowerBI_Fabric_Bootcamp.png'
  },
  {
    id: 'cert-2',
    title: 'Python Bootcamp',
    issuer: 'LetsUpgrade (in collaboration with National Skill Development Corporation)',
    date: 'May 21-23, 2025',
    fileName: 'LetsUpgrade_Python_Bootcamp.png'
  },
  {
    id: 'cert-3',
    title: 'SQL (Advanced) Skill Certification',
    issuer: 'HackerRank',
    date: 'July 21, 2025',
    fileName: 'HackerRank_SQL_Advanced.png'
  },
  {
    id: 'cert-4',
    title: 'Power BI for Beginners',
    issuer: 'Simplilearn SkillUp (Powered by Microsoft)',
    date: 'July 23, 2025',
    fileName: 'Simplilearn_PowerBI_Beginners.png'
  },
  {
    id: 'cert-5',
    title: 'Python for Data Analysis',
    issuer: 'Simplilearn SkillUp',
    date: 'June 23, 2025',
    fileName: 'Simplilearn_Python_Data_Analysis.png'
  },
  {
    id: 'cert-6',
    title: 'Microsoft Excel for Data Analysis',
    issuer: 'LetsUpgrade (in collaboration with National Skill Development Corporation)',
    date: 'May 8-9, 2025',
    fileName: 'Excel_Data_Analysis.png'
  }
];
