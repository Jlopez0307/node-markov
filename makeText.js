/** Command-line tool to generate Markov text. */
const fs = require('fs');
const process = require('process');
const axios = require('axios');
const markov = require('./markov');
const MarkovMachine = require('./markov');

const newText = (text) => {
    let generetedText = new MarkovMachine(text)
    console.log(generetedText.makeText());
    
}

const readFile = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {

        if(err){
            console.log(`Error reading ${file}:`, err);
            process.exit(1);
        } else{
            console.log(`Generated text from ${file}...`)
            newText(data);
            process.exit(1);
        }
    });
}

const url = async (URL) => {
    let res;
    try{
        res = await axios.get(URL)
    } catch (err) {
        console.log(`Error fetching ${URL}`, err)
        process.exit(1);
    }
    newText(res.data)
        
};


if (process.argv[2] === 'file'){
    readFile(process.argv[3]);
} else if(process.argv[2] === 'url'){
    url(process.argv[3]);
}