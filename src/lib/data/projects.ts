export type Project = {
  slug: string;
  title: string;
  category: 'Product' | 'AI' | 'Systems' | 'Commerce';
  description: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
  accent: string;
  preview: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: 'joicys-haven',
    title: 'Joicy\'s Haven Beauty Spa',
    category: 'Product',
    description:
      'A fully functional beauty spa website showcasing services with responsive design and smooth interactions. Built with modern frontend technologies and animation libraries.',
    impact: 'Delivered a complete product with responsive design and engaging user interface.',
    stack: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'HTML5'],
    github: 'https://github.com/',
    demo: 'https://themarcell.vercel.app/',
    accent: '#7dd3fc',
    preview: 'Beauty spa website with service showcase and booking interface',
    highlights: ['Responsive Design', 'Smooth Animations', 'Service Showcase']
  },
  {
    slug: 'cancer-detector',
    title: 'Cervical Cancer Detector',
    category: 'AI',
    description:
      'Deep learning application using RESNET and VGGNET architectures to detect cervical cancer from medical imaging data with high accuracy.',
    impact: 'Implemented robust deep learning models for medical image classification.',
    stack: ['TensorFlow', 'Sklearn', 'NumPy', 'OpenCV', 'Matplotlib'],
    github: 'https://github.com/',
    demo: 'https://themarcell.vercel.app/',
    accent: '#f0abfc',
    preview: 'Deep learning model for cervical cancer detection from medical images',
    highlights: ['RESNET Architecture', 'VGGNET Architecture', 'Medical Image Analysis']
  },
  {
    slug: 'hotel-landing',
    title: '4-Star Hotel Landing Page',
    category: 'Product',
    description:
      'A professional hotel landing page showcasing amenities and booking features. Built with semantic HTML, modern CSS styling, and interactive JavaScript.',
    impact: 'Created engaging landing page with responsive design and interactive elements.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/',
    demo: 'https://themarcell.vercel.app/',
    accent: '#86efac',
    preview: 'Hotel landing page with amenities showcase and reservation interface',
    highlights: ['Semantic HTML', 'Modern CSS', 'Interactive Elements']
  },
  {
    slug: 'real-image-portfolio',
    title: 'REAL IMAGE Bespoke Portfolio',
    category: 'Product',
    description:
      'A custom portfolio website showcasing design work and creative services with premium presentation and smooth user experience.',
    impact: 'Delivered professional portfolio with polished design and user experience.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Design', 'UI/UX'],
    github: 'https://github.com/',
    demo: 'https://themarcell.vercel.app/',
    accent: '#fde68a',
    preview: 'Bespoke portfolio site with premium design presentation',
    highlights: ['Premium Design', 'Smooth Experience', 'Professional Showcase']
  },
  {
    slug: 'waleefects',
    title: 'Waleefects Portfolio',
    category: 'Product',
    description:
      'A creative portfolio website showcasing digital services and creative work. Designed with modern web technologies and attention to visual hierarchy.',
    impact: 'Created professional portfolio platform for creative services.',
    stack: ['React', 'JavaScript', 'CSS3', 'UI Design'],
    github: 'https://github.com/',
    demo: 'https://themarcell.vercel.app/',
    accent: '#c7d2fe',
    preview: 'Creative services portfolio with modern design',
    highlights: ['Creative Showcase', 'Modern UI', 'Professional Presentation']
  }
];

export const filters = ['All', 'Product', 'AI', 'Systems', 'Commerce'] as const;
