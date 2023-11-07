import React, { useEffect ,useState } from 'react';
import SingleBookmark from './singleBookmark';
import Swal from 'sweetalert2'

const Bookmark = () => {

    const [bookmark, setBookmark] = useState([])

    const handleDelete = id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {   
          fetch(`https://blog-server-tawny-iota.vercel.app/bookmark/${id}`,{
            method:'DELETE',
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your Blog has been deleted.',
                    'success' )
                  const remaining = bookmark.filter(bookmark => bookmark._id !== id);
                  setBookmark(remaining)
            }
          })
        }
      })
    }
    useEffect(() => {
        fetch('https://blog-server-tawny-iota.vercel.app/bookmark')
             .then(res => res.json())
             .then(data => setBookmark(data))
    },[])
    return (  <>
              <h2 className='text-center mt-2 text-2xl font-semibold text-yellow-600 mb-2 '>Bookmark news</h2>
            <div className='grid md:grid-cols-2 gap-5 rounded mb-8'>
            {bookmark.map(bookmark => 
               <SingleBookmark
               key={bookmark._id}
               handleDelete={handleDelete}
               bookmark={bookmark}
               >
               </SingleBookmark>)
            }
            
          </div>   </>
    );
};

export default Bookmark;