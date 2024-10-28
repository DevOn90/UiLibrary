import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button1.component.html',
  styleUrl: './button1.component.css',
})
export class Button1Component {
  @Input() label = 'button1';
  @Input() color = 'red'; 
}
