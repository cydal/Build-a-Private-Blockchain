# Blockchain Data

Blockchain has the potential to change the way that the world approaches data. Develop Blockchain skills by understanding the data model behind Blockchain by developing your own simplified private blockchain.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

### Configuring your project

- Use NPM to initialize your project and create package.json to store project dependencies.
```
npm init
```
- Install crypto-js with --save flag to save dependency to our package.json file
```
npm install crypto-js --save
```
- Install level with --save flag
```
npm install level --save
```

## Testing


#### Project 2 - Build a Private Blockchain

To test code:
1: Open a command prompt or shell terminal after install node.js.
2: Enter a node session, also known as REPL (Read-Evaluate-Print-Loop).
```
node
```
3: Copy and paste your code into your node session
4: Instantiate blockchain with blockchain variable
```
let blockchain = new Blockchain();
```
5: Generate 10 blocks using a for loop
```
for (var i = 0; i <= 10; i++) {
  blockchain.addBlock(new Block("test data "+i));
}
```
6: Validate blockchain
```
blockchain.validateChain();
```
7: Induce errors by changing block data
```
let inducedErrorBlocks = [2,4,7];
for (var i = 0; i < inducedErrorBlocks.length; i++) {
  blockchain.chain[inducedErrorBlocks[i]].data='induced chain error';
}
```
8: Validate blockchain. The chain should now fail with blocks 2,4, and 7.
```
blockchain.validateChain();
```





#### Project 3 Rest API for Private Blockchain


To run server

> node server.js


The program contains two end points, this can be accessed with a program like curl or using a web browser  - 



#### GET

Example:

> curl -v localhost:8000/block/{height}

Example of response - 


> HTTP/1.1 200 OK
 X-Powered-By: Express
 Content-Type: application/json; charset=utf-8
 Content-Length: 179
 ETag: W/"b3-+gxVYwE76EWjj/tJpiO4c4sQwxE"
 Date: Wed, 03 Oct 2018 12:01:01 GMT
 Connection: keep-alive
{
    "hash": "c99af57148f7d74691cb91c849e01a8ec7eceb18594f53c8a989b1861ecbfc3d",
    "height": 0,
    "body": "First block in the chain - Genesis block",
    "time": "1538568045",
    "previousBlockHash": ""
}



#### POST


Example:


> curl -v "POST" "http://localhost:8000/block" -H 'Content-Type: application/json' -d $'{"body":"Second Entry"}'

> HTTP/1.1 200 OK
 X-Powered-By: Express
 Content-Type: application/json; charset=utf-8
 Content-Length: 215
 ETag: W/"d7-PpSzZTOCrFohvBN1jqn6yWaVePs"
 Date: Wed, 03 Oct 2018 15:10:59 GMT
 Connection: keep-alive

{
    "hash": "ebe088a2dc36140da06752f4da7b564656e0a4c55b3546ea63dad323ce9c4d41",
    "height": 15,
    "body": "Third Entry",
    "time": "1538579376",
    "previousBlockHash": "ef20173685ed05f058b95d79704119d68af6e7e9abdee419bcfc508ac9950906"
}


