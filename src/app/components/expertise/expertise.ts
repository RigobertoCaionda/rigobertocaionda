import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { expertiseAreas } from '../../data/skills';

@Component({
  selector: 'app-expertise',
  imports: [SectionHeader],
  templateUrl: './expertise.html',
  styleUrl: './expertise.css',
})
export class Expertise {
  protected readonly areas = expertiseAreas;
}
