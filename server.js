
const Blockchain = require('./simpleChain.js').Blockchain;

const express = require('express');
const app = express();
const port = 8000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log('App listening on port ' + port);
});


/** 
//Mock blockchain data
let mockChain = {
    '0': { "height": 0, 'time': '6.30pm', 'hash': 3001020}, 
    '1': { "height": 1, 'time': '6.40pm', 'hash': 3001234}
};
*/


let blockchain = new Blockchain();


app.get('/block/:height', async (req, res) => {

    const height = req.params.height;
    const block = await blockchain.getBlock(height);
    res.send(block);
    
    //res.send(req.url);
    //res.send(JSON.stringify(mockChain[0]));
});


app.post('/block', async (req, res) => {

    //const length = Object.keys(mockChain).length;
    const length = await blockchain.getChainHeight;
    console.log(length);
    mockChain[length] = req.body.body;
    const response = blockchain.getBlock[length];

    res.send(response);
});



