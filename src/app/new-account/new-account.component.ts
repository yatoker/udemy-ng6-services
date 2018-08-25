import { Component, } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountsServices } from '../accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsServices]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsServices) { }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountsService.addAccount(accountName, accountStatus);

    this.loggingService.logStatusChange(accountStatus);
  }
}
