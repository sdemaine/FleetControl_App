import { Component, OnInit } from '@angular/core';
import {TransactionService} from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  uriToTest: string;

  constructor(private transactionSVC: TransactionService) { }

  testTheCall(){
    this.transactionSVC.testCall();
  }

  testUri(){
    this.transactionSVC.testURI(this.uriToTest);
  }

  ngOnInit() {
  }

}
