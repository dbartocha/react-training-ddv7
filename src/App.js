import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [isOverlay, setIsOverlay] = useState(false);

  const showCart = () => {
    setIsOverlay(true);
  }

  const hideCart = () => {
    setIsOverlay(false);
  }

  return (
      <CartProvider>
        {isOverlay && <Cart onHide={hideCart}/>}
        <Header  onShow={showCart}/>
        <main>
          <Meals/>
        </main>
      </CartProvider>
  );
}

export default App;
