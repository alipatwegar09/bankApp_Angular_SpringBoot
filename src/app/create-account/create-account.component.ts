import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  account:Account=new Account();
  accountCreate=false;
  constructor(private accountService:AccountService,private router:Router){}

  onSubmit(){
    this.saveAccount();
  }
  saveAccount(){
    this.accountService.createAccount(this.account).subscribe(data=>{
    //  this.account=data;
      this.accountCreate = true;
      console.log(data);
      setTimeout(()=>{
        this.accountService.goToAccountList()
      },2000)
    
    })
  }

  
}
