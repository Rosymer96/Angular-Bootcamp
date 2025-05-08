import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name: string = '';
  // @Output() onNameEmitted = new EventEmitter<string>();
  onNameEmitted = output<string>();

  emitName(): void {
    if (this.name) {
      this.onNameEmitted.emit(this.name);
      this.name = '';
    }
  }
}
