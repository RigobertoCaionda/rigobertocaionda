export interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    name: 'CapitalHub',
    category: 'Plataforma Financeira · Backend',
    description:
      'Plataforma de gestão de investimentos que trata de carteiras, transações de ativos, regras financeiras e acompanhamento de desempenho.',
    technologies: ['Node.js', 'AdonisJS', 'MySQL', 'Redis', 'RabbitMQ', 'Docker'],
  },
  {
    name: 'UNIG4CONSTRUCTION',
    category: 'Plataforma Empresarial',
    description:
      'Plataforma empresarial para gestão de construção com módulos de transportes, equipamentos e relatórios.',
    technologies: ['Node.js', 'AdonisJS', 'Angular'],
  },
  {
    name: 'UNIG4WASTE',
    category: 'Software Empresarial',
    description:
      'Software empresarial para operações de gestão de resíduos com módulos de revendedores, campanhas e promoções.',
    technologies: ['Node.js', 'AdonisJS'],
  },
];
