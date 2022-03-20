var Grocery = /** @class */ (function () {
    function Grocery(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    return Grocery;
}());
//Declaire Array
var groceries = [
    new Grocery('Milk', 1.99, 1),
    new Grocery('Bread', 2.99, 2),
    new Grocery('Eggs', 3.99, 6)
];
//DOM Interaction
var ele = document.getElementById('GroceryList');
//List items
groceries.forEach(function (e) {
    var li = document.createElement('li');
    li.textContent = "".concat(e.quantity, " ").concat(e.name, " ").concat(e.price);
    ele.appendChild(li);
});
