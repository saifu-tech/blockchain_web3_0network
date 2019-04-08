let Web3 = require('web3')
// ganache local bloackchain
//let url_ganache = 'HTTP://127.0.0.1:7545'

//let url infura
let url_infura = 'https://mainnet.infura.io/v3/26b896d72b16489a8927ee528b990e9f'

// using geth
//let url_geth = 'https://127.0.0.1:8545' 
 // web3  = new web3(url_ganache)
let web3  = new  Web3(url_infura)
//let web3 = new Web3(url_geth)

let address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

web3.eth.getBalance(address,function(error,balance){
    if(!error){
        console.log(web3.utils.fromWei(balance,'ether'))
    }else{
        console.log(error)
    }
})

