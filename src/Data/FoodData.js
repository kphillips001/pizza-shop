export const foodItems = [
  {
    name: 'Pepperoni Pizza',
    img: './img/pizza.jpeg',
    section: 'Pizza'
  },
  {
    name: 'Supreme Pizza',
    img: './img/supreme.jpg',
    section: 'Pizza'
  },
  {
    name: 'Deep Dish Pizza',
    img: './img/deep.jpg',
    section: 'Pizza'
  },
  {
    name: 'Veggie Pizza',
    img: './img/veggie.jpg',
    section: 'Pizza'
  },
  {
    name: 'Cheese Burger',
    img: './img/burger.jpeg',
    section: 'Hamburgers / Sandwiches'
  },
  {
    name: 'Bacon Cheese Burger',
    img: './img/bacon.jpeg',
    section: 'Hamburgers / Sandwiches'
  },
  {
    name: 'Chicken Tenders',
    img: './img/chicken-tenders.jpeg',
    section: 'Appetizers'
  },
  {
    name: 'Mini Burgers',
    img: './img/mini.jpeg',
    section: 'Appetizers'
  },
  {
    name: 'French Fries',
    img: './img/fries.jpeg',
    section: 'Appetizers'
  },
  {
    name: 'Garlic Bread',
    img: './img/garlicbread.jpg',
    section: 'Appetizers'
  },
  {
    name: 'Buffalo Wings',
    img: './img/wings.jpg',
    section: 'Appetizers'
  },
  {
    name: 'House Salad',
    img: './img/salad.jpeg',
    section: 'Salads'
  },
  {
    name: 'Garden Salad',
    img: './img/garden.jpeg',
    section: 'Salads'
  },
  {
    name: 'Chicken Melt',
    img: './img/sandwich.jpeg',
    section: 'Hamburgers / Sandwiches'
  }
]

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]){
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
