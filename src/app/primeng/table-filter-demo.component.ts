import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
// import * as gridColumnDefs from './domain/gridColumnDefs/transaction-gridColumnDefs.json'

import {CarService} from './services/carservice';
import {Car} from './domain/car';
import {RepositoryService} from '../services/repository.service';
import {HttpClient} from '@angular/common/http';
import {Transaction} from './domain/transaction';
import {TurboTableColumnDefs} from './domain/gridColumnDefs/turboTableColumnDefs';


@Component({
  selector: 'app-table-filter-demo',
  templateUrl: './table-filter-demo.component.html',
  styleUrls: ['./table-filter-demo.component.scss']
})
export class TableFilterDemoComponent implements OnInit {

  cars: Car[];
  transactions: Transaction[];

  cols: any[];
  tranCols: TurboTableColumnDefs[];

  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  constructor(private carService: CarService, private repositoryService: RepositoryService, private http:HttpClient) { }


  merge = function(objects) {
    let out = {};

    for (let i = 0; i < objects.length; i++) {
      for (let p in objects[i]) {
        out[p] = objects[i][p];
      }
    }

    return out;
  };

  ngOnInit() {

    this.carService.getCarsMedium().subscribe(
      (data) => {
        // console.log(data);
        this.cars = data;
      }
    );

    this.http.get<Transaction[]>('http://localhost/Sprague.FleetControl.API/api/v1/transaction').subscribe(
      (data) => {
        console.log(data);
        this.transactions = data;
        // console.log("Transactions");
        // console.log(data);
      }
    );


    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.tranCols = [
      { "field": "TransactionDate", "header": "TransactionDate"},
      { "field": "TransactionTime", "header": "TransactionTime"},
      { "field": "TotalProductUnits", "header": "AmtGal"},
      { "field": "Product", "nestedProperty": "Id", "header": "ProductId"},
      { "field": "Product", "nestedProperty": "ProductDescription", "header": "Product"},
      { "field": "Card", "nestedProperty": "TheirCardNumber", "header": "TheirCardNumber"},
      { "field": "Vehicle", "nestedProperty": "TheirVehicleNumber", "header": "TheirVehicleNumber"},
      { "field": "Vehicle", "nestedProperty": "Id", "header": "VehicleId"},
      { "field": "Vehicle", "nestedProperty": "VehicleDescription", "header": "VehicleDescription"},
      { "field": "Vehicle", "nestedProperty": "CreatedDate", "header": "CreatedDate"},
      { "field": "Driver", "nestedProperty": "LastName", "header": "LastName"},
      { "field": "Driver", "nestedProperty": "FirstName", "header": "FirstName"}
    ];
    // gridColumnDefs;




  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
  }

}
