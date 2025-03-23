import { Routes, Route } from "react-router";

import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

import "./styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
