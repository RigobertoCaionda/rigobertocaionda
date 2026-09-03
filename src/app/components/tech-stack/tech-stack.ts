import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { skillCategories } from '../../data/skills';

@Component({
  selector: 'app-tech-stack',
  imports: [SectionHeader],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css',
})
export class TechStack {
  protected readonly categories = skillCategories;
}
