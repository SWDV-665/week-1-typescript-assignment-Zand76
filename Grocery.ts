class Grocery {
    name: string;
    price: number;
    quantity: number;

    constructor(name:string, price:number, quantity:number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

//Declaire Array
let groceries = [
    new Grocery ('Milk', 1.99, 1), 
    new Grocery ('Bread', 2.99, 2), 
    new Grocery ('Eggs', 3.99, 6)
]

//DOM Interaction
const ele = document.getElementById('GroceryList');

//List items
groceries.forEach(e => {
    const li = document.createElement('li');
    li.textContent = `${e.quantity} ${e.name} ${e.price}`;
    ele.appendChild(li);
});
