import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeader {
  label = input<string>();
  title = input.required<string>();
  description = input<string>();
}
