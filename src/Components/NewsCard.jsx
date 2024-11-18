import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
  const {news} = props || {}
  const {
    author,
    title,
    thumbnail_url,
    details,
    rating,
    total_view,
    category_id
  } = news;
 

  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <div className="flex items-center space-x-3">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">{author.name}</p>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
      </div>
      <h2 className="font-bold text-lg mt-4">{title}</h2>
      <div className="my-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg"
        />
      </div>
      <p className="text-sm text-gray-700">
        {details.slice(0, 100)}...
       <Link to={`/news/${news._id}`}><span className="text-blue-500 cursor-pointer"> Read More</span></Link>
      </p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-1">
          <FaStar className="text-yellow-500" />
          <p className="font-bold">{rating.number}</p>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <FaEye />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
