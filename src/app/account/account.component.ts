import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountsServices } from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsServices]
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
