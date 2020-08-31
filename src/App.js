import React, {useState} from 'react';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';

function App() {
 const [openFood, setOpenFood] = useState();

  return (
    <>
     <GlobalStyle />    
     <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
     <Navbar />
     <Banner />
     <Menu setOpenFood={setOpenFood} />
    </>
  );
};

export default App;
