import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-card',
  imports: [NgIf, RouterLink],
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.scss',
})
export class UsersCardComponent {
  @Input() usuario: IUsuario | null = null;
}
