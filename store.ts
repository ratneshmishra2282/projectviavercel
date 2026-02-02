
import { AppState, Service } from './types';

const DEFAULT_SERVICES: Service[] = [
  {
    id: '1',
    title: 'End-to-End IT Services',
    category: 'it',
    description: 'Comprehensive IT infrastructure management, maintenance, and strategic planning for modern enterprises.',
    icon: 'Cpu'
  },
  {
    id: '2',
    title: 'Business Consultancy',
    category: 'consultancy',
    description: 'Strategic advisory services to optimize business processes, operational efficiency, and market growth.',
    icon: 'BarChart3'
  },
  {
    id: '3',
    title: 'Software Development',
    category: 'development',
    description: 'Customized software solutions designed to solve complex business challenges with cutting-edge technology.',
    icon: 'Code2'
  },
  {
    id: '4',
    title: 'Web & Mobile Applications',
    category: 'development',
    description: 'High-performance web and mobile experiences crafted for user engagement and scalability.',
    icon: 'Smartphone'
  },
  {
    id: '5',
    title: 'Data, AI & Analytics',
    category: 'it',
    description: 'Harness the power of data with advanced AI algorithms and insightful business intelligence tools.',
    icon: 'Database'
  },
  {
    id: '6',
    title: 'Cloud & Integration',
    category: 'it',
    description: 'Seamless cloud migration and integration services to modernize your digital architecture.',
    icon: 'Cloud'
  }
];

const DEFAULT_CONTENT = {
  heroTitle: 'Architecting the Future of Business with Technology.',
  heroSubtitle: 'STATVION INFOTECH delivers end-to-end IT solutions and business consultancy to drive digital transformation and sustainable growth.',
  aboutText: 'STATVION INFOTECH is a premier technology services and business consultancy firm. We bridge the gap between complex business challenges and innovative technological solutions. Our team of experts is dedicated to delivering excellence across the digital spectrum.',
  vision: 'To be the most trusted global partner in digital transformation, recognized for our innovation, integrity, and impact.',
  mission: 'To empower organizations through strategic technology leadership and customized IT services that foster agility and growth.'
};

export const loadAppState = (): AppState => {
  const saved = localStorage.getItem('statvion_app_state');
  if (saved) {
    const parsed = JSON.parse(saved);
    // Ensure cloudConfig exists for legacy migrations
    if (!parsed.cloudConfig) {
      parsed.cloudConfig = { isEnabled: false };
    }
    return parsed;
  }
  return {
    services: DEFAULT_SERVICES,
    content: DEFAULT_CONTENT,
    isLoggedIn: false,
    cloudConfig: { isEnabled: false }
  };
};

export const saveAppState = (state: AppState) => {
  localStorage.setItem('statvion_app_state', JSON.stringify(state));
};
