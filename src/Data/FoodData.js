export const foodItems = [
  {
    name: 'Pepperoni Pizza',
    img: './img/pizza.jpeg',
    section: 'Pizza'
  },
  {
    name: 'Cheese Burger',
    img: './img/burger.jpeg',
    section: 'Hamburgers'
  },
  {
    name: 'Chicken Tenders',
    img: './img/chicken-tenders.jpeg',
    section: 'Appetizers'
  },
  {
    name: 'French Fries',
    img: './img/fries.jpeg',
    section: 'Appetizers'
  },
  {
    name: 'Salad',
    img: './img/salad.jpeg',
    section: 'Salads'
  },
  {
    name: 'Chicken Melt',
    img: './img/sandwich.jpeg',
    section: 'Sandwiches'
  }
]

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]){
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
