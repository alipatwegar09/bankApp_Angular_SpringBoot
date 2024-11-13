package com.example.BankingApp.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.BankingApp.Mapper.AccountMapper;
import com.example.BankingApp.dto.AccountDto;
import com.example.BankingApp.entity.Account;
import com.example.BankingApp.repository.AccountRepository;
import com.example.BankingApp.service.AccountService;

@Service
public class AccountServiceImpl  implements AccountService{
	
	private AccountRepository accountRepository;
	@Override
	public AccountDto createAccount(AccountDto accountDto) {
		// TODO Auto-generated method stub
		Account account=AccountMapper.mapToAccount(accountDto);
		Account saveAccountDto=accountRepository.save(account);
		return AccountMapper.mapToAccountDto(saveAccountDto);
	}
	public AccountServiceImpl(AccountRepository accountRepository) {
		super();
		this.accountRepository = accountRepository;
	}
	@Override
	public AccountDto getAccountById(Long id) {
		// TODO Auto-generated method stub
		Account account=accountRepository.findById(id).orElseThrow(()->new RuntimeException());
		return AccountMapper.mapToAccountDto(account);
	}
	@Override
	public AccountDto deposit(Long id, double amount) {
		// TODO Auto-generated method stub
		Account account=accountRepository.findById(id).orElseThrow(()->new RuntimeException());
	    account.setBalance(account.getBalance() + amount)	;
	    Account saveAccountDto=accountRepository.save(account);
		return AccountMapper.mapToAccountDto(saveAccountDto);
	}
	@Override
	public AccountDto withdraw(Long id, double amount) {
		// TODO Auto-generated method stub
		Account account=accountRepository.findById(id).orElseThrow(()->new RuntimeException());
		if(account.getBalance()<amount) {
			throw new RuntimeException("Insufficient balance");
		}
	    account.setBalance(account.getBalance() - amount)	;
	    Account saveAccountDto=accountRepository.save(account);
		return AccountMapper.mapToAccountDto(saveAccountDto);
	}
	@Override
	public void deleteAccount(Long id) {
		// TODO Auto-generated method stub
		accountRepository.deleteById(id);
	}
	@Override
	public List<AccountDto> getAllAccounts() {
		// TODO Auto-generated method stub
		return accountRepository.findAll().stream().map((account)->AccountMapper.mapToAccountDto(account)).collect(Collectors.toList());
	}
	
}
