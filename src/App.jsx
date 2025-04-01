import { Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "./store";

import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import "./styles.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
