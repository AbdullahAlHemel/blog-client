import React from 'react';
import { Link } from 'react-router-dom';

const BLogSingle = ({news}) => {
    const {_id, title, image, description, category }= news
    return (
        <div className='border rounded hover:scale-105 duration-75'>
            <img src={image} className='rounded' alt="" />
            <div className='p-4'>
            <h3 className='text-2xl text-amber-700 text-center font-semibold'>{title}</h3>
            <h3 className='text-sm mb-1 text-blue-400 text-center'># {category}</h3>
            {description.length > 20?
            <h2>{description.slice(0,120)}
             <Link to={`news/${_id}`} className='leading-8 ml-2 p-1 bg-blue-400 mb-2 hover:bg-blue-600 hover:scale-105  text-white font-bold rounded-lg'>Details</Link>   
             </h2>:
             <h2>{description}</h2>
             }
            </div>
        </div>
    );
};

export default BLogSingle;