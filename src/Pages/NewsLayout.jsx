import React from "react";
import Header from "../Components/Header";
import RightNav from "../Components/Layout-Components/RightNav";
import { Link, useLoaderData } from "react-router-dom";

const NewsLayout = () => {
  const { data } = useLoaderData();
  const newsinfo = data[0];
  
 
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="grid grid-cols-4 md:grid-cols-12 w-10/12 pt-5 gap-10 mx-auto">
        <section className="col-span-3 md:col-span-9">
          <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img src={newsinfo?.image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold ">{newsinfo?.title}</h2>
              <p>{newsinfo?.details}</p>
              <div className="card-actions justify-end">
                <Link className="btn btn-secondary px-4 py-3" to={`/category/category_id`}>Back to category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-1 md:col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsLayout;
