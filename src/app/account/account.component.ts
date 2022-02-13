import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,  private accountsService: AccountsService){}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUPdated.emit(status);
    //we are emitting an event here that we will listen to in new account component
  }
}

//angular dependency injector actually a hierarchial injector , if we provide a service in some place of our app, 
// service in some place of our app, let's say on one component, the Angular framework knows how to create an instance of that service for this component and important, all its child components
// and actually this component and all its child components and the child components of the child components
// will receive the same instance of the service.

// If we provide a service there, the app module does have a providers array, the same instance and that's

// important,the same instance of the class, of the service is available in our whole app, in all components, in all

// directives, in all other services where we maybe inject the service. Yes, we can inject services into services,

// I'll come back to this. The next level for example would be the app component, there the app component and

// all its child components do have the same instance of the service and this is true for any component,

// so even if we have a child of the app component, if we provide it on that child, all the children of this

// child will have the same instance and the child itself but not the app component. The instances don't propagate up,

// they only go down that tree of components. The lowest level therefore is a single component with no child components.

// If we provide a service there, this component will have its own instance of this service and well it doesn't have any child components,

// so this instance will only be available for this component and this will actually even overwrite if we were to provide the same service on a higher level

// and that's exactly what we're doing.