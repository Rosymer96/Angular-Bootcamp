import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  name: string | null;
  email: string | null;
  imgUrl: string | null;
  colorFav: string | null;
}

@Component({
  selector: 'app-formulario-generador',
  imports: [FormsModule],
  templateUrl: './formulario-generador.component.html',
  styleUrl: './formulario-generador.component.css',
})
export class FormularioGeneradorComponent {
  usuario: Usuario = {
    name: null,
    email: null,
    imgUrl: null,
    colorFav: null,
  };

  formStyles: string = 'form-styles';
  btnStyles: string = 'btn-styles';
  usuarios: Usuario[] = [];

  showCard() {
    this.usuarios.push({ ...this.usuario });
    console.log(this.usuarios);
    this.usuario = { name: null, email: null, imgUrl: null, colorFav: null };
  }

  divStyle: string = 'div-style';
  imgContainer: string = 'img-container';
  imgStyle: string = 'img-style';
}
