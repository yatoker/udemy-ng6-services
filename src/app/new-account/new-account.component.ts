import { Component, } from '@angular/core';
import { AccountsServices } from '../accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [/*LoggingService, AccountsServices*/] 
  //In the providers section, If the AccountsServices instance is intended to be shared by this components, then it should not be stated here.
  //If a component is stated in the providers section, it means a new instance of the service will be created.
})
export class NewAccountComponent {

  constructor(private accountsService: AccountsServices) { }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountsService.addAccount(accountName, accountStatus);
  }
}
