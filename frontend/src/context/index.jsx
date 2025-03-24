import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems,setCartItems] = useState({})

  useEffect(() => {
    getProducts()
  }, []);

  async function getProducts() {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
   
      setProducts(data);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const getCartItemCount =(itemId)=>{
    if(itemId in cartItems){
      return cartItems[itemId]
    }
    return 0
  }

  const addToCart = (itemId)=>{
      setCartItems((prev)=>{
        const updateCartItems ={...prev, [itemId] : (prev[itemId] || 0) + 1}

        localStorage.setItem("cartItems", JSON.stringify(updateCartItems))

        console.log(updateCartItems)
        return updateCartItems
      })
  }

  const removeFromCart = (itemId)=>{
    if(!cartItems[itemId] || cartItems[itemId] === 0) return;

    setCartItems((prev)=>{
      const updatedCartItems = {...prev, [itemId]: prev[itemId]-1};

      if(updatedCartItems[itemId] === 0){
        const{ [itemId]:_, ...rest}=updatedCartItems;
        localStorage.setItem("cartItems", JSON.stringify(rest))
        return rest;
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    })
  }

  const updateCartItemCount = (newAmount, itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]:newAmount}));

  };

  const getTotalCartAmount = () => {
    if (products.length === 0 || Object.keys(cartItems).length === 0) return 0;

    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));

        // Check if itemInfo is defined and has new_price
        if (itemInfo && itemInfo.price !== undefined) {
          totalAmount += cartItems[item] * itemInfo.price;
        } else {
          console.warn(
            `Product with id ${item} not found or has no new_price.`
          );
        }
      }
    }
    return Number(totalAmount.toFixed(2));
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // function to clear cart
  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem("cartItems");
  };

  return (
    <GlobalContext.Provider value={{ products, setProducts, isLoading,cartItems,
      addToCart,
      removeFromCart,
      getCartItemCount,
      updateCartItemCount,
      getTotalCartAmount,
      getTotalCartItems,
       clearCart }}>
      {children}
    </GlobalContext.Provider>
  );
}