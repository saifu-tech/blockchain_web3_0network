let Web3 = require('web3')
let url = 'https://mainnet.infura.io/v3/26b896d72b16489a8927ee528b990e9f'
let web3 = new Web3(url)

let wallet = web3.eth.accounts.wallet.create(2,'some randrom string')

let account = web3.eth.accounts.create()

wallet.add(account.privatekey)
console.log(wallet[0])
