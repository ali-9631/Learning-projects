const menu = [
  { name: "Pizza", price: 10.99, category: "Main Course", vegetarian: true },
  { name: "Burger", price: 8.99, category: "Main Course", vegetarian: false },
  { name: "Salad", price: 6.99, category: "Appetizer", vegetarian: true },
  { name: "Pasta", price: 12.99, category: "Main Course", vegetarian: true },
  {
    name: "Chicken Wings",
    price: 9.99,
    category: "Appetizer",
    vegetarian: false,
  },
];

for (const item of menu) {
  console.log(item.name);
}

let sum = 0;

for (const item of menu) {
  sum += item.price;
}
console.log(sum);

const properties = Object.keys(menu[0]);
console.log(properties);

const values = Object.values(menu[0]);
console.log(values);

const entries = Object.entries(menu[0]);
console.log(entries);

const copy = {
  ...menu[0],
  name: "Vegan Pizza",
  price: 13.99,
};
console.log(copy);

//Destructuring
const { name, price } = menu[1];

console.log(name);
console.log(price);

//Filter

function getVegetarianItems(menu) {
  const vegetarianItems = [];

  for (const item of menu) {
    if (item.vegetarian === true) {
      vegetarianItems.push(item.name);
    }
  }

  return vegetarianItems;
}

const result = getVegetarianItems(menu);
console.log(result);
