import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products: Product[] = [
    {
      id: 1,
      name: 'Robette',
      description: 'Robe de sortie',
      price: 85000,
      image: 'assets/images/shop2.jpeg'
    },
    {
      id: 2,
      name: 'Robe',
      description: 'Robe de soirée chic',
      price: 65000,
      image: 'assets/images/shop1.jpeg'
    },
    {
      id: 3,
      name: 'Salade Doualais',
      description: 'Repas pour entrée',
      price: 3500,
      image: 'assets/images/plat1.jpeg'
    },
    {
      id: 4,
      name: 'Nike',
      description: 'Chaussures de sport',
      price: 85000,
      image: 'assets/images/nike1.jpg'
    },
    {
      id: 5,
      name: 'Nike',
      description: 'Chaussures de sport',
      price: 65000,
      image: 'assets/images/nike2.jpg'
    },
    {
      id: 6,
      name: 'Jordan',
      description: 'Chaussures de sport',
      price: 3500,
      image: 'assets/images/jordan1.jpg'
    },
    {
      id: 7,
      name: 'Jordan',
      description: 'Chaussures de sport',
      price: 65000,
      image: 'assets/images/jordan2.jpg'
    },
    {
      id: 8,
      name: 'Star',
      description: 'Chaussures de ville',
      price: 3500,
      image: 'assets/images/star1.jpg'
    }
  ];

}
