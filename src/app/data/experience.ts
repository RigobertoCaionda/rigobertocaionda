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
    role: 'Engenheiro Backend',
    period: '2026 — Presente',
    description:
      'Engenheiro backend a construir uma plataforma de gestão de investimentos com Node.js, AdonisJS e MySQL.',
    highlights: [
      'Gestão de carteiras de investimento',
      'Operações de compra e venda de ativos',
      'Cálculos de custo médio e custo de aquisição',
      'Ganhos realizados e não realizados',
      'Rendimentos, dividendos e evolução patrimonial',
      'Tratamento de IAC, IVA e taxas de corretagem',
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
    'CapitalHub é uma plataforma de gestão de investimentos que permite aos utilizadores gerir carteiras, executar transações de ativos e acompanhar o desempenho financeiro ao longo do tempo.',
  domain:
    'A plataforma trata de cálculos financeiros complexos incluindo custo médio, custo de aquisição, ganhos realizados e não realizados, dividendos, rendimentos e acompanhamento da evolução patrimonial.',
  responsibilities: [
    'Desenvolvimento de APIs backend com Node.js e AdonisJS',
    'Implementação de lógica de negócio no domínio financeiro',
    'Modelação MySQL para ativos, transações, cotações, fundos e obrigações',
    'Autenticação e autorização com RBAC',
    'Camada de cache Redis',
    'Integração de mensageria RabbitMQ',
    'Containerização com Docker',
  ],
  dataModeling: [
    'Ativos e tipos de ativos',
    'Transações e histórico de transações',
    'Cotações e dados de mercado',
    'Fundos e obrigações',
    'Posições em carteira',
    'Histórico de investimentos',
  ],
  infrastructure: [
    'Redis para cache e gestão de sessões',
    'RabbitMQ para mensageria assíncrona',
    'Docker para deploy containerizado',
  ],
  architecture: [
    'Utilizadores',
    'Autenticação / Autorização',
    'Carteira',
    'Transações',
    'Regras Financeiras',
    'Persistência',
    'Análises / Histórico',
  ],
};
