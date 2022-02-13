import { Component } from '@angular/core';
import { on } from 'events';
import { AccountsService } from '../accounts.service';
//add the import so TS knows where it is coming from. 
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
  // provide a service by adding providers property  and specify the type of what we want to be able to get provided

export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // we need to set the type and the type has to be the class you want to get injected.
  //status updated is cross component communication its is listen from account component and firing here. 
  constructor(private loggingService: LoggingService, private accountService: AccountsService) {
    this.accountService.statusUPdated.subscribe(
      (status: string) => alert('New Status ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    //while this works it is not the right way to call a service.
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus); moving to service file.

    //now we can anywhere in the component access our loggingService property which is created automatically. 
    this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    // we remove AccountServices from providers array  but leave in the constructor and here as well. **do same in account.component. but why do we remove the providers AccountsService**
  }
}

//
// To use services we use Angular dependency Injector. It is something a class of ours will depend on.
// in that service and the dependency injector simply injects this dependency, injects an instance of this
// class into our component automatically.
// All we need to do is we need to inform Angular that we require such an instance. We add a constuctor to the class where we want to use our service. 