import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import React from "react";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-24rem)] lg:my-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
