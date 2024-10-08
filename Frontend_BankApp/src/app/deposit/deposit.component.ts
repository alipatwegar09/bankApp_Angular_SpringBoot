import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {


  account:Account=new Account();
  id:number=0;
  depositAmount: number = 0;  
  constructor(private accountService:AccountService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id']
    this.accountService.getAccountById(this.id).subscribe(data=>{
      this.account=data;
    })
  }
  successMsg="";
  errorMsg="";
onSubmit() {
  if(this.isValidAmount(this.depositAmount)){
  this.accountService.deposite(this.id,this.depositAmount).subscribe(data=>{
    this.account=data;
    this.successMsg = "Deposited Successfully....";
    setTimeout(() => {
     this.accountService.goToAccountList();
    }, 2000)
  
   
  })
}
else{
    this.errorMsg = "Invalid Amount....Please enter valid amount!";

      setTimeout(() => {
        this.errorMsg = "";
      },2000)

}
}

isValidAmount (amount:number):boolean{

  return amount>0 && amount<10000000
}
}
