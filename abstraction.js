//abstraction means hiding complex details of how something works and only showing whats necessary to the user.
//abstraction means Showing only the essential details of an object and hiding the complex or sensitive parts.
class BankAccount{
    //declare private fields
    #accountNumber;
    #balance;
    constructor(accountHolder, accountNumber, balance = 0){
        this.accountHolder = accountHolder;
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }
    //public method
    deposit(amount){
        if(amount > 0){
            this.#balance = this.#balance + amount;
            return `You account has been credited with ${amount}$`;
        }else{
            return `Not allowed,deposit an amount greater than 0&.`
        }
    }
    //public method
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance = this.#balance - amount;
            return `${amount}$ has been deducted from your account and your balance is ${this.#balance}$`;
        }else{
            return `Your account has been depleted.`
        }
    }
    //public method
    checkBalance(){
        return `You have ${this.#balance}$ left on your account`
    }
    //abstracted-we do not let the users see the raw account number
    getAccountDetails(){
        return `Account holder: ${this.accountHolder}`;
    }
}
const bankAccount1 = new BankAccount("Kevin Scot", 1234678, 5000);
console.log("..............Account information....................");
console.log(bankAccount1.getAccountDetails());
console.log("..............Balance....................");
console.log(bankAccount1.checkBalance());
console.log("..............withdrawal details....................");
console.log(bankAccount1.withdraw(2000));