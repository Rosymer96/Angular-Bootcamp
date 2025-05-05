import { Component } from '@angular/core';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  productName: string = 'Aretes Flor';
  productDescription: string = 'Aretes dorados con diseño floral en oro dorado';
  productPrice: number = 12;
  productImgPath: string = 'products/imagen1.jpg';
  pushCar(): void {
    console.log('Producto agregado al carrito de compras');
  }
}
