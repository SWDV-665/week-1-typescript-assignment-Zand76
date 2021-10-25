//Create grocery class
class Grocery {
    fullDetails: string;

    constructor(
        public name: string, 
        public price: number, 
        public quantity: number
    )   {
        this.fullDetails = name + " " + price + " " + quantity;
    }
}

interface Item {
    name: string;
    price: number;
    quantity: number;
}

function showList(buy: Item) {
    return "Item: " + buy.name + " Price: $" + buy.price + " Number: " + buy.quantity;
}

let groceryList = new Grocery("Milk", 4.99, 2);

document.body.textContent = showList(groceryList);
