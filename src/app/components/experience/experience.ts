import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { experiences, capitalHubCaseStudy } from '../../data/experience';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected readonly experiences = experiences;
  protected readonly caseStudy = capitalHubCaseStudy;
}
