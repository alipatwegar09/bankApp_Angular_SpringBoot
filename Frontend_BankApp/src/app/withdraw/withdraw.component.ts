import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {


  account: Account = new Account();
  id: number = 0;
  withdrawAmount: number = 0;
  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.accountService.getAccountById(this.id).subscribe(data => {
      this.account = data;
    })
  }
  successMsg = "";
  errorMsg = "";
  onWithdraw() {
    if(this.withdrawAmount> this.account.balance && this.isValidAmount(this.withdrawAmount)){
      this.errorMsg = "Insufficient balance!";
      setTimeout(() => {
        this.errorMsg = "";
      },2000)
    }
    if (this.isValidAmount(this.withdrawAmount)) {
      this.accountService.withdraw(this.id, this.withdrawAmount).subscribe(data => {
        this.account = data;
        this.successMsg = "withdraw Successfully....maximum Amout will be 10 lakh Rupees";
        setTimeout(() => {
          this.accountService.goToAccountList();
        }, 2000)
      })
    }
    else {
      this.errorMsg = "Invalid Amount....Please enter valid amount!";
      setTimeout(()=>{
      this.errorMsg="";
      },2000)
    }
  }

  isValidAmount(amount: number): boolean {

    return amount > 0 && amount < 10000000
  }

}
