import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionModel} from '../models/Transaction.model';
import {RepositoryService} from '../services/repository.service';

@Injectable()
export class TransactionService {

  constructor(private http:HttpClient, private repositorySvc: RepositoryService) {

  }

  testCall(){
    this.http.get<TransactionModel>('http://localhost/Sprague.FleetControl.API/api/v1/transaction').subscribe(
      (data) => {
        console.log("Transactions");
        console.log(data);
      }
    )
  }

  testURI(uri: string){
    // this.http.get('http://localhost/Sprague.FleetControl.API/api/v1/' + uri).subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // )

    console.log('uri: ' + uri);
    this.repositorySvc.get(uri).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
