import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-engineering-approach',
  imports: [SectionHeader],
  templateUrl: './engineering-approach.html',
  styleUrl: './engineering-approach.css',
})
export class EngineeringApproach {
  protected readonly steps = [
    {
      number: '01',
      title: 'Compreender o domínio',
      description: 'Compreender o problema e as regras de negócio antes de implementar.',
    },
    {
      number: '02',
      title: 'Desenhar a solução',
      description: 'Definir entidades, responsabilidades, fluxos e integrações.',
    },
    {
      number: '03',
      title: 'Construir para manutenibilidade',
      description: 'Priorizar código limpo, responsabilidades bem definidas e soluções sustentáveis.',
    },
    {
      number: '04',
      title: 'Validar e entregar',
      description: 'Testar, integrar e preparar a solução para deployment.',
    },
  ];
}
