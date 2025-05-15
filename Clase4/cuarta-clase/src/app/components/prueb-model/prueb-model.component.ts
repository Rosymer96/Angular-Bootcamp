import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-prueb-model',
  imports: [FormsModule],
  templateUrl: './prueb-model.component.html',
  styleUrl: './prueb-model.component.css',
})
export class PruebModelComponent {
  @Input() valor: string = '';
  @Output() valorChange: EventEmitter<string> = new EventEmitter();

  onValorChange($event: string): void {
    this.valorChange.emit($event);
  }
}
