import React, { useEffect, useState } from 'react';
import Blogone from './Blogone';

const AllBlog = () => {
    const [News, setNews] = useState([])

    useEffect(() => {
        fetch('https://blog-server-tawny-iota.vercel.app/news')
             .then(res => res.json())
             .then(data => setNews(data))
    },[])

    return (
        
        <div className='grid grid-cols-2 gap-5 rounded'>
            {News.map(newst => 
               <Blogone
               key={newst._id}
               newst={newst}
               >
               </Blogone>)
  
            }
        </div>
    );
};

export default AllBlog;