// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;

    console.log(`Owner is: ${owner}`);
    console.log(`Balance is: ${balance}`);
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposit: ${amount}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawl: ${amount}`);
    } 
    else {
      console.log("Can not withdrawl: Insuficient balance");
    }
  }

  displayBalance() {
    console.log(`Total balance: ${this.balance}`);
  }
}

const account = new BankAccount(2000, "Sneha");

account.deposit(800);
account.withdraw(1000);
account.displayBalance();

account.withdraw(2000);
account.displayBalance();


