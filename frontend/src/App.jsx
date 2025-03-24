import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Wishlist from "./pages/Wishlist/Wishlist";
import Account from "./pages/Account/Account";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { ToastContainer } from "react-toastify";
import BottomNav from "./components/BottomNav/BottomNav";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <RegisterPage />;
}
function App() {
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar={false} closeOnClick />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/products" element={<ProductDetail />}>
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
        <BottomNav />
        <Footer />
      </Router>
    </>
  );
}

export default App;
