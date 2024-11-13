package com.example.BankingApp.service;


import java.util.List;

import com.example.BankingApp.dto.AccountDto;

public interface AccountService {
	
	AccountDto createAccount(AccountDto account);
	AccountDto getAccountById(Long id);
	AccountDto deposit(Long id, double amount);
	AccountDto withdraw(Long id, double amount);
	void deleteAccount(Long id);
	List<AccountDto> getAllAccounts();
}
