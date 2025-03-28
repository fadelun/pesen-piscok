import { Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "./store";

import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Paket from "./pages/Paket";
import Cart from "./pages/Cart";

import "./styles.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="paket" element={<Paket />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
