import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountsServices } from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService/*, AccountsServices*/]
  //In the providers section, If the AccountsServices instance is intended to be shared by this components, then it should not be stated here.
  //If a component is stated in the providers section, it means a new instance of the service will be created.
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsServices: AccountsServices) { }

  onSetTo(status: string) {

    this.accountsServices.updateStatus(this.id, status);
    this.loggingService.logStatusChange('A server status changed, new status: ' + status);
  }
}
