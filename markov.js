/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let markovChain = {};

    for(let i = 0; i < this.words.length; i++){
      let word = this.words[i]
      if(!markovChain[word]){
        markovChain[word] = []
      }
      if(this.words[i + 1]){
        markovChain[word].push(this.words[i + 1]);
      } else{
        markovChain[word].push(null)
      }
    }
    this.chain = markovChain
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Object.keys(this.chain); 
    let randKeys = keys[Math.floor(Math.random() * keys.length)]
    let end = [];

    while( end.length < numWords && randKeys != null){
      end.push(randKeys);
      randKeys = keys[Math.floor(Math.random() * keys.length)]
    }
    return end.join(" ");
  }
}
module.exports = MarkovMachine;
