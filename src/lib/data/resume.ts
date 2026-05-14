export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const experience: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'Global-wise Technologies',
    period: 'Jul 2025 – Dec 2025',
    description: 'Built responsive and accessible web interfaces, developing reusable UI components and optimizing performance.',
    achievements: [
      'Built responsive and accessible web interfaces using HTML5, CSS3, and JavaScript, improving user engagement by 30%',
      'Developed reusable UI components and optimized front-end performance for faster load times',
      'Collaborated with designers and backend developers in agile sprints'
    ]
  },
  {
    role: 'IT Support & Software Developer',
    company: 'Technology Value',
    period: 'Nov 2024 – Jun 2025',
    description: 'Diagnosed technical issues and tested applications across web and mobile platforms.',
    achievements: [
      'Diagnosed and resolved 20+ technical issues, increasing system uptime by 25%',
      'Tested applications and reported bugs, reducing post-release issues by 40%',
      'Promoted based on strong technical performance and problem-solving ability'
    ]
  },
  {
    role: 'Virtual Assistant',
    company: 'Care2rise, London, UK',
    period: 'Jun 2023 – Feb 2024',
    description: 'Managed digital operations, documentation, and research to improve workflow efficiency.',
    achievements: [
      'Managed digital operations, documentation, and research, improving workflow efficiency by 30%',
      'Delivered high-quality administrative support to clients, achieving 98% task completion rate',
      'Supported multiple projects simultaneously while meeting strict deadlines'
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    category: 'Languages & Frameworks',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'SvelteKit', 'TypeScript']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Google Colab']
  },
  {
    category: 'Data & Visualization',
    skills: ['Python', 'NumPy', 'Sklearn', 'TensorFlow', 'OpenCV', 'Power BI', 'Excel']
  },
  {
    category: 'Practices',
    skills: ['Responsive Design', 'UI Optimization', 'Version Control', 'Agile/Scrum', 'Performance Discipline']
  }
];

export const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Time Management',
  'Adaptability',
  'Technical Communication',
  'Independent & Team-oriented Work'
];

export const certifications = [
  'Frontend Development Bootcamp – Google Developer Student Clubs'
];

export const education = [
  {
    school: 'Federal University, Oye, Ekiti State',
    degree: 'Bachelor of Science — Computer Science',
    period: '2021 - 2025'
  },
  {
    school: 'St. Charles\' College, Ilorin, Kwara State',
    degree: 'Senior School Certificate Examination (SSCE)',
    period: '2014 - 2020'
  }
];
