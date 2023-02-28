const Bank = require('./1-Bank')

class Chase extends Bank {
    processPayment() {
        console.log(`Your payment of ${this.amount} has been process by Chase`);
    }
    processRefund() {
        console.log(`a refund of amount ${this.amount} has been process by Chase`);
    }
}


module.expors = Chase