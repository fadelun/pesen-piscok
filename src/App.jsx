import { Routes, Route } from "react-router";

import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Paket from "./pages/Paket";

import "./styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="paket" element={<Paket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
