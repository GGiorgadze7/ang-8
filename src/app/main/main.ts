import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [NgStyle, NgClass],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  products = [
    { id: 10, name: 'ტელევიზორი', price: 450, category: 'ტექნიკა', inStock: true },
    { id: 11, name: 'გეიმინგ კომპიუტერი', price: 4000, category: 'ტექნიკა', inStock: true },
    { id: 12, name: 'სავარძელი', price: 199, category: 'ავეჯი', inStock: false },
    { id: 13, name: 'ფანჯარა', price: 300, category: 'სამშენებლო მასალა', inStock: true },
    { id: 14, name: 'მიქსერი', price: 40, category: 'სამზარეულოს ტექნიკა', inStock: true },
    { id: 15, name: 'ფლეისთეიშენი', price: 1300, category: 'ტექნიკა', inStock: false },
  ];
}
