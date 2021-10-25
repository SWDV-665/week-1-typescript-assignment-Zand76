var Grocery = /** @class */ (function () {
    function Grocery(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.fullDetails = name + " " + price + " " + quantity;
    }
    return Grocery;
}());
function showList(buy) {
    return "Item: " + buy.name + " Price: $" + buy.price + " Number: " + buy.quantity;
}
var groceryList = new Grocery("Milk", 4.99, 2);
document.body.textContent = showList(groceryList);
