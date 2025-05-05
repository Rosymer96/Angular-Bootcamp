import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-generador',
  imports: [],
  templateUrl: './formulario-generador.component.html',
  styleUrl: './formulario-generador.component.css',
})
export class FormularioGeneradorComponent {
  name: string | null = null;
  email: string | null = null;
  imgUrl: string | null = null;
  colorFav: string | null = null;
  styleShowCard: string = 'none';

  formStyles: string = 'form-styles';
  btnStyles: string = 'btn-styles';
  onChangeValueName(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement) {
      this.name = inputElement.value;
    } else {
      this.name = null;
    }
  }

  onChangeValueEmail(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement) {
      this.email = inputElement.value;
    } else {
      this.email = null;
    }
  }

  onChangeValueImg(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement) {
      this.imgUrl = inputElement.value;
    } else {
      this.imgUrl = null;
    }
  }

  onChangeValueColor(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement) {
      this.colorFav = inputElement.value;
    } else {
      this.colorFav = null;
    }
  }

  showCard() {
    console.log(this.name, this.email, this.imgUrl, this.colorFav);
    if ((this.styleShowCard = 'none')) {
      this.styleShowCard = 'flex';
    } else return;
  }

  divStyle: string = 'div-style';
  imgContainer: string = 'img-container';
  imgStyle: string = 'img-style';
}

interface Usuario {
  name: string | null;
  email: string | null;
  imgUrl: string | null;
  colorFav: string | null;
}
