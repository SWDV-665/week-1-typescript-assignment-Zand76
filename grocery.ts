//Create grocery class
class Grocery {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

interface Item {
    name: string;
    price: number;
    quantity: number;
}

function showList(item: Item) {
    return "Item Details: " + Item.name + " " + Item.price + " " + Item.quantity;
}

//Create grocery items array
let grocery_list = [
    new Grocery('Milk', 1, 3),
    new Grocery('Bread', 2, 6),
    new Grocery('Eggs', 3, 11)
];

document.body.textContent = showList(grocery_list);
