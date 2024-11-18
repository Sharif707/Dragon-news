import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/Layout-Components/LeftNavbar";
import RightNav from "../Components/Layout-Components/RightNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-10/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="grid grid-cols-12 w-10/12 mx-auto pt-5 gap-8">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3"><RightNav></RightNav></aside>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
