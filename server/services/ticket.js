const shortid = require('shortid');
const {generateNumberArray, shuffle}  =  require('./../utils/utils');

const generateTicket = () => {
  const id = shortid.generate();
  let numbers = {};
  let arr = shuffle(generateNumberArray(100)).slice(0, 25);
  arr.forEach(number => numbers[number] = {selected: false});
  return {[id]: {numbers}}
}

module.exports = {
  generateTicket
}
