import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  // The component's HTML tag name (like React's component name)
  selector: 'app-root',

  // New Angular feature that doesn't require NgModule
  standalone: true,

  // Required dependencies (React doesn't need this as imports are enough)
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],

  // External template file (React would have JSX here)
  templateUrl: './app.component.html',

  // External styles (React would import CSS)
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Component's title property (in React, this would be in state or props)
  title = 'Posts Dashboard';
}