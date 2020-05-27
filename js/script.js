const table = document.getElementById('pizza-table');

var pizzas = [
    {name: 'Hawaii', ingredients: 'Tomatensaus, Kaas, Ham, Ananas', price: '8,-'},
    {name: 'Borromea', ingredients: 'Tomatensaus, Kaas, Ham', price: '6,50'},
    {name: 'Calzone', ingredients: 'Tomatensaus, Mozarella, Salami, Champignons, Geraspte kaas', price: '9,50'},
];

console.log(pizzas.length);
console.log(pizzas[0].name);

pizzas.forEach(pizzaLoop);

// Adds a row for 1 kind of pizza
function pizzaLoop(pizza) {
    // console.log(pizza);
    var row = document.createElement("TR");
    var info = document.createElement("TD");
    var info1 = document.createElement("TD");
    var info2 = document.createElement("TD");
    var title = document.createTextNode(pizza.name);
    // var title1 = document.createTextNode(pizzas[0].name);
    var description = document.createTextNode(pizza.ingredients);
    var price = document.createTextNode(pizza.price);
    row.appendChild(info);
    row.appendChild(info1);
    row.appendChild(info2);
    info.appendChild(title);
    info1.appendChild(description);
    info2.appendChild(price);
    table.appendChild(row);
    console.log(info1);
}
        