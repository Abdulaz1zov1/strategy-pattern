const Bank = require('./1-Bank')

class CityBank extends Bank {
    processPayment() {
        console.log(`Your payment of ${this.amount} has been process by CityBank`);
    }
    processRefund() {
        console.log(`a refund of amount ${this.amount} has been process by CityBank`);
    }
}


module.expors = CityBank