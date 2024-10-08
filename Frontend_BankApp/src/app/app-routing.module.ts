import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';

const routes: Routes = [
  { path: "accounts", component: AccountListComponent},
  { path: "create-account", component: CreateAccountComponent },
  { path: "deposit/:id", component: DepositComponent },
  { path: "withdraw/:id", component: WithdrawComponent },
  { path: "delete/:id", component: DeleteAccountComponent },
  { path: "view/:id", component: ViewAccountComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
