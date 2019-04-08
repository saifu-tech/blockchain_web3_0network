let Web3 = require("web3")

let url = 'https://mainnet.infura.io/v3/26b896d72b16489a8927ee528b990e9f'

let web3 = new Web3(url)

// to get all block details start
web3.eth.getBlockNumber().then((result)=>{
    console.log(result)
})
// to get all block details end

// to get particular block details start
web3.eth.getBlock(7500809).then((block)=>{
console.log(block)
})

// to get particular block details end

 //to get particular coloumn from block  start
web3.eth.getBlockNumber().then((result)=>{
   for (let i = 0; i < 100; i++) {
     web3.eth.getBlock(result-i).then((block)=>{
         console.log(block.number)
     })
   }
})
 //to get particular coloumn from block  end


web3.eth.getBlock('latest').then((block)=>{
console.log(block.number)
})


web3.eth.getTransactionFromBlock('7507363',2).then(console.log)
