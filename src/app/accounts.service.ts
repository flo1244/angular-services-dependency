import { EventEmitter, Injectable } from "@angular/core";

//use a service within a service centralization.
import { LoggingService } from "./logging.service";

// tells angular that this service is injectable . Use on the service that is receiving. **What's the point of injecting service within a service?
@Injectable()
export class AccountsService {
    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
    ];
    //we can add a eventemitter here instead of property binding chains and call it in the component you want to emit the event. 
    statusUPdated = new EventEmitter<string>();
    
    constructor(private loggingService: LoggingService){}
    
    //add method to expect to get an account name and status
    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
    }
    //method to update the id of the account and update with new status
    updateStatus(id: number, status: string ) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}