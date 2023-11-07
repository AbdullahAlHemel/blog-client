import React, { useEffect ,useState } from 'react';
import SingleBookmark from './singleBookmark';

const Bookmark = () => {

    const [bookmark, setBookmark] = useState([])

    useEffect(() => {
        fetch('https://blog-server-tawny-iota.vercel.app/bookmark')
             .then(res => res.json())
             .then(data => setBookmark(data))
    },[])
    return (  <>
              <h2 className='text-center mt-2 text-2xl font-semibold text-yellow-600 mb-3 '>Bookmark news</h2>
            <div className='grid md:grid-cols-2 gap-5 rounded mb-8'>
            {bookmark.map(bookmark => 
               <SingleBookmark
               key={bookmark._id}
               bookmark={bookmark}
               >
               </SingleBookmark>)
            }
            
          </div>   </>
    );
};

export default Bookmark;