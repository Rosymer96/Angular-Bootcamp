import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  @Input() nombre?: string = '';
  @Input({ required: true }) nombreRequired: string = '';

  nombreSignal = input<string>();
  nombreSignalRequired = input.required<string>();

  @Output() onCreateNombre: EventEmitter<string> = new EventEmitter();

  onDeleteNombre = output<string>();

  anadirPersona(): void {
    this.onCreateNombre.emit('Ana');
  }
}
