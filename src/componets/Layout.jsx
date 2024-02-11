import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet /> {/* load the rest of the content */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
