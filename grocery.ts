//Create grocery class
class Grocery {
    name:string;
    price:number;
    quantity:number;

    constructor(name:string, price:number, quantity:number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    displayGroceryItem(): void {
        console.log('This grocery item is: ${this.name}');
    }
}

//Create grocery items array
const Milk = new Grocery('Milk', 4.99, 1);
Milk.displayGroceryItem();

let grocery_list = [
    new Grocery('Milk', 1, 3),
    new Grocery('Bread', 2, 6),
    new Grocery('Eggs', 3, 11)
]


