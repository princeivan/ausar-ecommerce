import { createContext, useEffect, useState } from "react";
import api from "../../api";
import Flashsales from "../components/FlashSales/Flashsales";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [products, setProducts] = useState([]);
  const [flashSales, setFlashSales] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getProducts();
    getFlashsale();
    getBestSellers();
    getCategories();
  }, []);

  async function getProducts(url = "api/products/", query = "") {
    const separator = url.includes("?") ? "&" : "?";
    const finalUrl = query
      ? `${url}${separator}query=${encodeURIComponent(query)}`
      : url;
    api
      .get(finalUrl)
      .then((res) => res.data)
      .then((data) => {
        setProducts(data.data);
        setCurrentPage(data.current_page);
        setTotalPages(data.total_pages);
        setNextPage(data.next);
        setPrevPage(data.previous);
      })
      .catch((err) => console.log(err));
  }
  async function getFlashsale() {
    api
      .get("api/flash-sales/")
      .then((res) => res.data)
      .then((data) => {
        setFlashSales(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }

  async function getCategories() {
    api
      .get("api/categories/")
      .then((res) => res.data)
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => console.log(err));
  }

  async function getBestSellers() {
    api
      .get("api/best-sellers/")
      .then((res) => res.data)
      .then((data) => {
        setBestSellers(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }

  const getCartItemCount = (itemId) => {
    if (itemId in cartItems) {
      return cartItems[itemId];
    }
    return 0;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updateCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };

      localStorage.setItem("cartItems", JSON.stringify(updateCartItems));

      console.log(updateCartItems);
      return updateCartItems;
    });
  };

  const removeFromCart = (itemId) => {
    if (!cartItems[itemId] || cartItems[itemId] === 0) return;

    setCartItems((prev) => {
      const updatedCartItems = { ...prev, [itemId]: prev[itemId] - 1 };

      if (updatedCartItems[itemId] === 0) {
        const { [itemId]: _, ...rest } = updatedCartItems;
        localStorage.setItem("cartItems", JSON.stringify(rest));
        return rest;
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    if (products.length === 0 || Object.keys(cartItems).length === 0) return 0;

    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));

        // Check if itemInfo is defined and has new_price
        if (itemInfo && itemInfo.new_price !== undefined) {
          totalAmount += cartItems[item] * itemInfo.new_price;
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
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        flashSales,
        category,
        setCategory,
        bestSellers,
        totalPages,
        currentPage,
        nextPage,
        prevPage,
        isLoading,
        cartItems,
        addToCart,
        removeFromCart,
        getCartItemCount,
        updateCartItemCount,
        getTotalCartAmount,
        getTotalCartItems,
        clearCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
