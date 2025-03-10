import React from 'react';
import { Link } from 'react-router-dom';

const NewsDetails = ({news}) => {
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
          {details}
          </p>
         
        </div>
      </div>
        </div>
    );
};

export default NewsDetails;