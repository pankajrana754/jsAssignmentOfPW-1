class BankAccount {
    constructor(accountHolder,initialBalance){
        this.accountHolder=accountHolder;
        this.balance=initialBalance;

    }
    deposit(amount){
        if(amount>0){
            this.balance+=amount;
            console.log(`Deposited Rs.${amount}.New balance:Rs.${this.balance}`);

        }else{
            console.log(`Invalid deposit amount .Enter valide amount `);
        }
    }
    Withdraw(amount){
       
            if(amount>0){
                if(amount<=this.balance){
                    this.balance-=amount;
                    console.log(`Withdrawn Rs.${amount}.New balance:Rs.${this.balance}`);
                }
                else{
                console.log('insufficient balance !');
                }
            }else{
                console.log('invalid widrawal amount please enter a positive amount .');

            }
        }
        checkBalance(){
            console.log(`Amount balance for ${this.accountHolder}:Rs.${this.balance}`);
        }
    
}
const myAccount =new BankAccount('Pankaj ',10000);
myAccount.checkBalance();
myAccount.deposit(500);
myAccount.deposit(-23);
myAccount.Withdraw(2321);
myAccount.Withdraw(-121);
myAccount.checkBalance();
