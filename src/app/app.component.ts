import { Component, OnInit } from '@angular/core';
import { AccountsServices } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsServices]
})
export class AppComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  constructor(private accountsService: AccountsServices) {

  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

}
