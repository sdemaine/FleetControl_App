import { Component, OnInit } from '@angular/core';

import { Car } from '../car.interface';
import {HttpClient} from '@angular/common/http';

class Product {
  ProductID: number;
  ProductName: string;
  ProductNumber: number;
}

interface ProductResponse {
  message: string;
  products: Product[];
}

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  cols: any[];

  products: Product[] = [];
  productCols: any[];

  selectedColumns: any[];

  constructor( private http: HttpClient ) {
    // this.getCarsMedium();

    // this.cars = [
    //   {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
    //   {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
    //   {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
    //   {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
    //   {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
    //   {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
    //   {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
    //   {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
    //   {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
    //   {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    // ];
  }
  //
  // getProducts() {
  //   this.http.get<ProductResponse>('http://localhost:5000/api/v1/Products')
  //     .subscribe(response => {
  //       this.products = response.products;
  //       console.log(response);
  //     });
  // }

  // getCarsMedium() {
  //   this.http.get<Car[]>('http://localhost:4200/assets/cars-medium.json')
  //     .subscribe(response => {
  //       this.cars = response;
  //       console.log(this.cars);
  //     });
  // }

  sortMe() {
    console.log('sorting...');
  }

  ngOnInit() {
    // this.getCarsMedium();

    console.log('ngOnInit');

    // this.getProducts();

    // this.cols = [
    //   { field: 'vin', header: 'Vin' },
    //   { field: 'year', header: 'Year' },
    //   { field: 'brand', header: 'Brand' },
    //   { field: 'color', header: 'Color' }
    // ];

    this.cols = [
      { field: 'productID', header: 'ProductID' },
      { field: 'ProductName', header: 'ProductName' },
      { field: 'ProductNumber', header: 'ProductNumber' }
    ];

    this.productCols = [
      { field: 'productID', header: 'ProductID' },
      { field: 'name', header: 'ProductName' },
      { field: 'productNumber', header: 'ProductNumber' }
    ];


    this.selectedColumns = this.productCols;
  }

}
