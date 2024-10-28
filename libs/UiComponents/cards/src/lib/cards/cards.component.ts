import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

@Component({
  selector: 'lib-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() user!: User;
}
