import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const { data: news } = useLoaderData();
  // console.log(news);
  
  return <div>
    <h2 className="font-semibold mb-4 text-2xl">Dragon News Home</h2>

    <div>
        {
            news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
        }
    </div>

  </div>;
};

export default Category;
