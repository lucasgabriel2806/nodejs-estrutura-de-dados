const Animal = require('./Animal.js');

class Gato extends Animal {

    falar() {
        console.log('O gato mia');
    }

}

module.exports = Gato;