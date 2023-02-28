const Chase = require('./server')
const Bank = require('./2-Bank')
const Payment = require('./Payment') 

const payment = new Payment()

payment.pay(new Chase(200, '266342780123'))
payment.pay(new Bank(150, '031342780123'))

payment.refund(new Chase(150, '266342780123'))