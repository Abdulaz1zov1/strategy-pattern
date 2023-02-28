// Strategy
class Bank {
    constructor(amount, account){
        this.amount = amount
        this.account = account
    }
    pay() {
        return this.processPayment()
    }
    refund() {
        return this.refundRefund()
    }
}

module.expors = Bank