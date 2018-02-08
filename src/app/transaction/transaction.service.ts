import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TransactionService {

  constructor(private http:HttpClient) {

  }

  testCall(){
    this.http.get('http://localhost/Sprague.FleetControl.API/api/v1/businessassociate').subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  testURI(uri: string){
    this.http.get('http://localhost/Sprague.FleetControl.API/api/v1/' + uri).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
