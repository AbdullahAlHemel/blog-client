import React from 'react';
import { Link } from 'react-router-dom';

const Blogone = ({newst}) => {
    const {_id, title, image, description, category }= newst

    return (
        
        <div className='border rounded hover:scale-100 duration-75 mt-2 mb-12'><Link to={`/news/${_id}`}>
            <img src={image} className='rounded m-auto m-auto' alt="" />
            <div className='p-4'>
            <h3 className='text-2xl text-amber-700 text-center font-semibold'>{title}</h3>
            <h3 className='text-xl mb-2 mt-1  text-blue-400 text-center'># {category}</h3>
            
            {description.length > 20?<>
            <h2>{description.slice(0,120)}</h2>
             <div className='w-16 m-auto mt-3'><Link to={`/news/${_id}`} className='leading-8 ml-2 p-1 bg-blue-400 mb-2 hover:bg-blue-600 hover:scale-105  text-white font-bold rounded-lg'>Details</Link></div>   
             </>
             :
             <h2>{description}</h2>
             }             
             
            </div></Link>
        </div>
    );
};

export default Blogone;