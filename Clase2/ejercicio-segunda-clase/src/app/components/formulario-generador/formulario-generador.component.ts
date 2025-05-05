import { Component } from '@angular/core';

interface Usuario {
  name: string | null;
  email: string | null;
  imgUrl: string | null;
  colorFav: string | null;
}

@Component({
  selector: 'app-formulario-generador',
  imports: [],
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

  styleShowCard: string = 'none';
  formStyles: string = 'form-styles';
  btnStyles: string = 'btn-styles';

  onChangeValueName(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement) {
      this.usuario.name = inputElement.value;
    } else {
      this.usuario.name = null;
    }
  }

  onChangeValueEmail(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement) {
      this.usuario.email = inputElement.value;
    } else {
      this.usuario.email = null;
    }
  }

  onChangeValueImg(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement) {
      this.usuario.imgUrl = inputElement.value;
    } else {
      this.usuario.imgUrl = null;
    }
  }

  onChangeValueColor(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement) {
      this.usuario.colorFav = inputElement.value;
    } else {
      this.usuario.colorFav = null;
    }
  }

  showCard() {
    console.log(
      this.usuario.name,
      this.usuario.email,
      this.usuario.imgUrl,
      this.usuario.colorFav
    );
    if ((this.styleShowCard = 'none')) {
      this.styleShowCard = 'flex';
    } else return;
  }

  divStyle: string = 'div-style';
  imgContainer: string = 'img-container';
  imgStyle: string = 'img-style';
}
