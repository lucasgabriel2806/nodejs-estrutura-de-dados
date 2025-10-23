class Matematica {

    static somar(a, b) {
        console.log(a + b);
    }

    static subtrair(a, b) {
        console.log(a - b);
    }

    static fatorial(n) {
        let total = 0;
        for(let i = 1; i <= n; i++) {
            total = total + i;
        }
        console.log(total);
    }

}

module.exports = Matematica;