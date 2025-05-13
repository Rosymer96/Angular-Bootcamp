import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario';
import { UsersCardComponent } from '../users-card/users-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [UsersCardComponent, RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  usuarios: IUsuario[] = [];

  ngOnInit(): void {
    const usuariosString = localStorage.getItem('usuarios');
    this.usuarios = usuariosString ? JSON.parse(usuariosString) : [];
    console.log('usuarios', this.usuarios);
  }
}
