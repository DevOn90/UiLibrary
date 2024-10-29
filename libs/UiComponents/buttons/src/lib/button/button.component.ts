import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ButtonProps {
  /** Set to true for primary styling */
  primary?: boolean;
  /** Background color for the button */
  backgroundColor?: string;
  /** Size of the button, affects padding and font size */
  size?: 'small' | 'medium' | 'large';
  /** Button label text */
  label: string;
  /** Click event handler */
  onClick?: () => void;
}

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
/** A reusable button component with customizable properties */
export class ButtonComponent {
  @Input() primary = false;
  @Input() backgroundColor = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Button';
  @Output() clicked = new EventEmitter<void>();

  get classes(): string[] {
    const mode = this.primary ? 'primary' : 'secondary';
    return [`button-${this.size}`, `button-${mode}`];
  }

  onClick() {
    this.clicked.emit();
  }
}
