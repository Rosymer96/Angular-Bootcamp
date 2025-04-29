import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-products-container',
  imports: [CardProductComponent],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css',
})
export class ProductsContainerComponent {}
