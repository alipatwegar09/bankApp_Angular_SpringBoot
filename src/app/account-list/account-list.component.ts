import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {
  accounts:Account[]=[];
  constructor(private accountService:AccountService,private router:Router){}

  ngOnInit(){
    this.getAllAccounts();
  }
  getAllAccounts(){
    this.accountService.getAllAccounts().subscribe(data=>{
      this.accounts=data;
      console.log(data);
    })
  }
  deposit(id:number) {
    this.router.navigate(['/deposit',id])
  }
  delete(id: number) {
    this.accountService.delete(id).subscribe(data=>{
      console.log(data);
      this.getAllAccounts()
    })
  }
  withdraw(id: number) {
    this.router.navigate(['/withdraw', id])
  }
}
