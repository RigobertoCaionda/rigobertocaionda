export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Node.js', 'AdonisJS', 'REST APIs'],
  },
  {
    name: 'Bases de Dados',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    name: 'Mensageria & Cache',
    skills: ['RabbitMQ', 'Redis'],
  },
  {
    name: 'DevOps / Infraestrutura',
    skills: ['Docker', 'CI/CD', 'Ansible'],
  },
  {
    name: 'Engenharia de Software',
    skills: ['DDD', 'TDD', 'SOLID', 'Clean Code', 'Design Patterns'],
  },
  {
    name: 'Ferramentas',
    skills: ['Git', 'SonarQube'],
  },
  {
    name: 'Frontend',
    skills: ['Angular'],
  },
];

export interface ExpertiseArea {
  title: string;
  description: string;
  icon: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Sistemas Backend',
    description:
      'APIs, serviços backend e regras de negócio utilizando Node.js e AdonisJS.',
    icon: 'server',
  },
  {
    title: 'Lógica de Negócio',
    description:
      'Transformação de requisitos e regras de negócio em fluxos de software consistentes.',
    icon: 'git-branch',
  },
  {
    title: 'Dados & Persistência',
    description:
      'Modelação e evolução de bases de dados, entidades, relacionamentos e camadas de persistência.',
    icon: 'database',
  },
  {
    title: 'Integração & Infraestrutura',
    description:
      'Integrações, mensageria, cache e infraestrutura utilizando RabbitMQ, Redis e Docker.',
    icon: 'layers',
  },
  {
    title: 'Engenharia de Software',
    description:
      'Aplicação de DDD, TDD, SOLID, Clean Code e Design Patterns quando apropriado.',
    icon: 'code',
  },
];

export const navigationLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Competências', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];
