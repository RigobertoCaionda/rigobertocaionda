export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  projects: ProjectReference[];
  tags: string[];
}

export interface ProjectReference {
  name: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface CaseStudy {
  context: string;
  domain: string;
  responsibilities: string[];
  dataModeling: string[];
  infrastructure: string[];
  architecture: string[];
}

export const experiences: Experience[] = [
  {
    company: 'CapitalHub',
    role: 'Engenheiro de Software — Backend',
    period: '2026 — Presente',
    description:
      'Projeto pessoal de engenharia de software desenvolvido a partir das minhas próprias necessidades como investidor, com foco na construção de uma plataforma de gestão de investimentos utilizando Node.js, AdonisJS e MySQL.',
    highlights: [
      'Gestão de carteiras de investimento',
      'Operações de compra e venda de ativos',
      'Cálculo de custo médio e custo de aquisição',
      'Ganhos realizados e não realizados',
      'Rendimentos, dividendos e evolução patrimonial',
      'Tratamento de IAC, IVA e taxas de corretagem',
      'Modelagem e persistência de dados financeiros',
      'Autenticação, autorização e RBAC'
    ],
    projects: [],
    tags: ['Node.js', 'AdonisJS', 'MySQL', 'Redis', 'RabbitMQ', 'Docker'],
  },
  {
    company: 'ITGEST Angola',
    role: 'Desenvolvedor de Software',
    period: '2022 — Presente',
    description:
      'Desenvolvimento de software completo para plataformas empresariais nos sectores da construção e gestão de resíduos.',
    highlights: [
      'Módulos de revendedores',
      'Campanhas e promoções',
      'APIs e regras de negócio',
      'Gestão de transportes e equipamentos',
      'Geração de relatórios PDF e Excel',
      'Integração com Angular',
    ],
    projects: [
      {
        name: 'UNIG4CONSTRUCTION',
        description:
          'Plataforma empresarial para gestão de construção com módulos de transportes, equipamentos e relatórios.',
        highlights: [
          'Gestão de transportes',
          'Gestão de equipamentos',
          'Geração de relatórios PDF e Excel',
          'Desenvolvimento de REST APIs',
          'Integração com frontend Angular',
        ],
        tags: ['Node.js', 'AdonisJS', 'Angular'],
      },
      {
        name: 'UNIG4WASTE',
        description:
          'Software empresarial para operações de gestão de resíduos com módulos de revendedores, campanhas e promoções.',
        highlights: [
          'Módulos de revendedores',
          'Sistemas de campanhas e promoções',
          'Desenvolvimento backend',
          'Implementação de lógica de negócio',
          'Desenvolvimento de APIs',
        ],
        tags: ['Node.js', 'AdonisJS'],
      },
    ],
    tags: ['Node.js', 'AdonisJS', 'Angular'],
  },
];

export const capitalHubCaseStudy: CaseStudy = {
  context:
    'O CapitalHub é uma plataforma pessoal de gestão de investimentos, desenvolvida a partir das minhas próprias necessidades como investidor. A plataforma permite gerir carteiras, registar operações de compra e venda de ativos e acompanhar o desempenho financeiro e a evolução patrimonial ao longo do tempo.',
  domain:
    'O sistema implementa regras de negócio relacionadas com diferentes tipos de ativos e operações de investimento, incluindo cálculo de custo médio e custo de aquisição, Ganhos realizados e não realizados, Dividendos, juros e outros rendimentos, Impostos e taxas de corretagem, Gestão de posições em carteira, Evolução patrimonial e histórico de investimentos',
  responsibilities: [
    'Desenvolvimento de APIs backend com Node.js e AdonisJS',
    'Implementação de regras de negócio no domínio financeiro',
    'Modelagem e persistência de dados relacionais com MySQL',
    'Modelagem de ativos, transações, cotações, fundos, obrigações e posições em carteira',
    'Implementação de autenticação e autorização com RBAC',
    'Utilização de Redis para cache e gestão de sessões',
    'Utilização de RabbitMQ para mensageria assíncrona',
    'Containerização da aplicação com Docker',
  ],
  dataModeling: [
    'Utilizadores',
    'Ativos e tipos de ativos',
    'Transações',
    'Cotações',
    'Posições em carteira',
    'Fundos de investimentos',
    'Obrigações',
    'Histórico de investimentos',
  ],
  infrastructure: [
    'Redis para cache e gestão de sessões',
    'RabbitMQ para mensageria assíncrona',
    'Docker para containerização e preparação do ambiente de execução',
  ],
  architecture: [
    'Utilizadores',
    'Autenticação / Autorização',
    'Carteira',
    'Transações',
    'Regras de Negócio Financeiras',
    'Persistência',
    'Análises / Histórico',
  ],
};
