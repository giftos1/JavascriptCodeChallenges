// Create a function that has the drinks array as an argument and return the drinks'
// objects sorted by price in ascending order

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

function sortDrinkByPrice(array) {
    sortedArray = array.sort((a, b) => (a.price > b.price) ? 1 : -1);
    return sortedArray;
}

console.log(sortDrinkByPrice(drinks));