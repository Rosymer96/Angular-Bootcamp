import { Component } from '@angular/core';
import { ProductsContainerComponent } from './products-container/products-container.component';

@Component({
  selector: 'app-root',
  imports: [ProductsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'XiulingStore';
}
