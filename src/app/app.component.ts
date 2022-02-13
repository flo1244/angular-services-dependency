import { Component, OnInit } from '@angular/core';
//imports our account service file
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
  //add the provider so angular knows how to create such an account service.
  
export class AppComponent implements OnInit {
  //defining the type want an array of such objects an empty array.
  accounts: { name: string, status: string }[] = [];

  //inject our service here in the constuctor
  constructor(private accountsService: AccountsService) { }
  //this onInit lifecycle hook as most initialization should not be done in the constructor but instead here and simply set this accounts, 
  //setting it to accounts allows us to access the accounts array in serivce file. 
  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }



  //Moving this to accounts services
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
