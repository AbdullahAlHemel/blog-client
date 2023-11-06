import { useEffect, useState } from 'react';
import BLogSingle from './BLogSingle';

const RecentBlog = () => {

   const [News, setNews] = useState([])

    useEffect(() => {
        fetch('https://blog-server-tawny-iota.vercel.app/news')
             .then(res => res.json())
             .then(data => setNews(data))
    },[])

    return (
        <div className='my-7 mb-12'>
           <h2 className='text-center font-bold text-[28px] pt-8 pb-4'>Top NEWS Update</h2>
          
            {/* <h5>news: {News.length}</h5> */}
            <div className='grid grid-cols-3 gap-5 rounded'>
            {News.map(news => 
               <BLogSingle
               key={news._id}
               news={news}
               >
               </BLogSingle>)
  
            }
            </div>
            
        </div>
    );
};

export default RecentBlog;