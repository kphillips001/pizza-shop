export function formatPrice(price){
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
  {
    name: 'Pepperoni Pizza',
    img: './img/pizza.jpeg',
    section: 'Pizza',
    price: 14.99
  },
  {
    name: 'Supreme Pizza',
    img: './img/supreme.jpg',
    section: 'Pizza',
    price: 17.99
  },
  {
    name: 'Deep Dish Pizza',
    img: './img/deep.jpg',
    section: 'Pizza',
    price: 18.99
  },
  {
    name: 'Veggie Pizza',
    img: './img/veggie.jpg',
    section: 'Pizza',
    price: 14.99
  },
  {
    name: 'Cheese Burger',
    img: './img/burger.jpeg',
    section: 'Hamburgers / Sandwiches',
    price: 7.99
  },
  {
    name: 'Bacon Cheese Burger',
    img: './img/bacon.jpeg',
    section: 'Hamburgers / Sandwiches',
    price: 8.99
  },
  {
    name: 'Chicken Tenders',
    img: './img/chicken-tenders.jpeg',
    section: 'Appetizers',
    price: 7.99
  },
  {
    name: 'Mini Burgers',
    img: './img/mini.jpeg',
    section: 'Appetizers',
    price: 6.99
  },
  {
    name: 'French Fries',
    img: './img/fries.jpeg',
    section: 'Appetizers',
    price: 3.99
  },
  {
    name: 'Garlic Bread',
    img: './img/garlicbread.jpg',
    section: 'Appetizers',
    price: 4.99
  },
  {
    name: 'Buffalo Wings',
    img: './img/wings.jpg',
    section: 'Appetizers',
    price: 8.99
  },
  {
    name: 'House Salad',
    img: './img/salad.jpeg',
    section: 'Salads',
    price: 3.99
  },
  {
    name: 'Garden Salad',
    img: './img/garden.jpeg',
    section: 'Salads',
    price: 3.99
  },
  {
    name: 'Chicken Melt',
    img: './img/sandwich.jpeg',
    section: 'Hamburgers / Sandwiches',
    price: 7.99
  }
]

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]){
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
