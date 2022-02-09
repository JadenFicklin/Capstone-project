import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Shoecare from "./Pages/Shoecare";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import ShoecareCheckout from "./Pages/ShoecareCheckout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shoecare" element={<Shoecare />} />
        <Route path="/shoecareCheckout" element={<ShoecareCheckout />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />}>
          <Route path=":id" element={<Checkout />} />
        </Route>
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
