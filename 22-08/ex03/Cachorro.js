const Animal = require('./Animal.js');

class Cachorro extends Animal {

    falar() {
        console.log('O cachorro late');
    }

}

module.exports = Cachorro;