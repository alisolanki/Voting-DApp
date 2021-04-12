var contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidates",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "votes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "candidatesCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];
var contractAddress = "0xD98c150ca4339664eC66f932bE68043Ad5F9703f";
var web3 = new Web3('http://localhost:7545');
var voting = new web3.eth.Contract(contractABI, contractAddress);

console.log(voting);

web3.eth.getAccounts().then(console.log);

document.addEventListener('DOMContentLoaded', async () => {
  var candidatesCount = await voting.methods.candidatesCount().call();

  var x = "", i;
  for (i = 1; i <= candidatesCount; i++) {
    var candidateName = await voting.methods.candidates(i).call();
    x = x + "<h2>" + candidateName.name + "</h>";
  }

  document.getElementById('candidate').innerHTML = x;
})