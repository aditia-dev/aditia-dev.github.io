export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const skills: Skill[] = [
  { name: 'JavaScript', category: 'Frontend', icon: '📜' },
  { name: 'TypeScript', category: 'Frontend', icon: '🔷' },
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Vue.js', category: 'Frontend', icon: '💚' },
  { name: 'HTML5', category: 'Frontend', icon: '🌐' },
  { name: 'CSS3', category: 'Frontend', icon: '🎨' },
  
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Express', category: 'Backend', icon: '🚂' },
  { name: 'Python', category: 'Backend', icon: '🐍' },
  { name: 'PostgreSQL', category: 'Backend', icon: '🐘' },
  { name: 'MongoDB', category: 'Backend', icon: '🍃' },
  { name: 'REST API', category: 'Backend', icon: '🔌' },
  
  { name: 'Git', category: 'Tools', icon: '🔧' },
  { name: 'Docker', category: 'Tools', icon: '🐳' },
  { name: 'AWS', category: 'Tools', icon: '☁️' },
  { name: 'CI/CD', category: 'Tools', icon: '🔄' },
  { name: 'Jest', category: 'Tools', icon: '🃏' },
  { name: 'Webpack', category: 'Tools', icon: '📦' },
];

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern React and Node.js backend with PostgreSQL database.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/aditia-dev/ecommerce',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%230066ff"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="white"%3EE-Commerce Platform%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features. Supports project organization and deadline tracking.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://example.com/tasks',
    githubUrl: 'https://github.com/aditia-dev/task-manager',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23000000"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="white"%3ETask Management%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with geolocation support, 7-day forecasts, and interactive maps. Clean, responsive UI with beautiful data visualizations and weather alerts.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Grid'],
    demoUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/aditia-dev/weather-dashboard',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%230066ff"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="white"%3EWeather Dashboard%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Blog CMS',
    description: 'Modern content management system for blogs with markdown support, SEO optimization, and analytics integration. Includes authentication, commenting system, and rich text editor.',
    technologies: ['Next.js', 'MongoDB', 'NextAuth', 'MDX'],
    demoUrl: 'https://example.com/blog',
    githubUrl: 'https://github.com/aditia-dev/blog-cms',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23000000"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="white"%3EBlog CMS%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Fitness Tracker',
    description: 'Personal fitness tracking application with workout logging, progress visualization, and goal setting. Features include exercise library, calorie tracking, and social sharing.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    demoUrl: 'https://example.com/fitness',
    githubUrl: 'https://github.com/aditia-dev/fitness-tracker',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%230066ff"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="white"%3EFitness Tracker%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Real-Time Chat',
    description: 'Instant messaging application with real-time communication, group chats, file sharing, and emoji support. Built with WebSocket for instant message delivery.',
    technologies: ['Socket.io', 'Express', 'React', 'Redis', 'MongoDB'],
    demoUrl: 'https://example.com/chat',
    githubUrl: 'https://github.com/aditia-dev/realtime-chat',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23000000"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="white"%3EReal-Time Chat%3C/text%3E%3C/svg%3E',
  },
];

export function groupSkillsByCategory(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
}
