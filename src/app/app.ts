import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Expertise } from './components/expertise/expertise';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { EngineeringApproach } from './components/engineering-approach/engineering-approach';
import { TechStack } from './components/tech-stack/tech-stack';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Expertise,
    Experience,
    Projects,
    EngineeringApproach,
    TechStack,
    Education,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
