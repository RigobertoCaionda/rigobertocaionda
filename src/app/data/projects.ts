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
    category: 'Plataforma de Gestão de Investimentos · Backend',
    description:
      'Plataforma pessoal de gestão de investimentos, desenvolvida para gerir carteiras, operações de compra e venda de ativos, regras financeiras e acompanhar o desempenho e a evolução patrimonial.',
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
