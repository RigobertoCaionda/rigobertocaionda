import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [SectionHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = projects;
}
