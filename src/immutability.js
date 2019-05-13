const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a);
console.log(b);

class MutableGlass {
    constructor(content, ammount) {
        this.content = content;
        this.amount = ammount;
    }

    takeDrink(value) {
        this.amount = Math.max(this.amount - value, 0);
        return this;
    }
}

const mg1 = new MutableGlass('water', 100);
const mg2 = mg1;

mg2.takeDrink(40);

console.log(mg1 === mg2);
console.log(mg1.amount === mg2.amount);

class ImmutableGlass {
    constructor(content, amount) {
        this.content = content;
        this.amount = amount;
    }

    takeDrink(value) {
        return new ImmutableGlass('water', Math.max(this.content - value, 0));
    }
}


const ig1 = new ImmutableGlass('water', 100);
const ig2 = ig1.takeDrink(20);

console.log(ig1 === ig2);
console.log(ig1.amount === ig2.amount);
