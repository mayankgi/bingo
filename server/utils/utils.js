const shortid = require('shortid');

const getNewId = () => shortid.generate();

const generateNumberArray = length => {
  let arr = [];
  for(let i = 0; i < length; i++){
    arr.push(i+1);
  }
  return arr;
}

const shuffle = (arr) => {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

module.exports = {
  getNewId,
  generateNumberArray,
  shuffle
}
