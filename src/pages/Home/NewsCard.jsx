import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title,image_url, details,_id } = news;

  return (
    <div>
      <div className="card bg-base-100 w-96 pb-4 lg:w-auto shadow-sm">
        <figure>
          <img
            className=""
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {details.length > 200 ? <p>{ details.slice(0,200)} <Link
            to={`/news/${_id}`}
            className="text-blue-600 font-bold "> Read More... </Link> </p> 
            :
            <p> {details} </p> 
            
        }
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
