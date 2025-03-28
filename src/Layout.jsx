import { Outlet } from "react-router";

import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>
      <Modal />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
