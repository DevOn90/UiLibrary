import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User {
  /** User's full name */
  name: string;
  /** User's email address */
  email: string;
  /** URL to the user's avatar image */
  avatarUrl: string;
}

/** Displays user information in a card format with name, email, and avatar */
@Component({
  selector: 'lib-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  /** User object containing name, email, and avatarUrl */
  @Input() user!: User;
}
