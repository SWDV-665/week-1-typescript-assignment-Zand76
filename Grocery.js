//Declaire Array
var groceries = ['Milk', 'Bread', 'Eggs'];
//DOM Interaction
var groceryList = document.getElementById('GroceryList');
//List items
groceries.forEach(function (item) {
    var li = document.createElement('li');
    li.innerText = item;
    groceryList.appendChild(li);
});
