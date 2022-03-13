//Declaire Array
let groceries = ['Milk', 'Bread', 'Eggs'];

//DOM Interaction
let groceryList = document.getElementById('GroceryList');

//List items
groceries.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    groceryList.appendChild(li);
});
