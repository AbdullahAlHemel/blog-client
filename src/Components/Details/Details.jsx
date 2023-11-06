import { HiBookmark } from "react-icons/hi2";
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'  
import Comment from "./Comment";

const Details = () => {
    const news = useLoaderData()
    const {_id, title, image, description, category }= news;

    const handleBookMark = event => {
      event.preventDefault()
 
      const title = document.getElementById("title").innerHTML;
      const category = document.getElementById("category").innerHTML;
      const image = news.image
      const description = document.getElementById("description").innerHTML
      const bookmark = {title, category, description, image}
      console.log(bookmark);
      console.log(news)
      fetch(`https://blog-server-tawny-iota.vercel.app/bookmark`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(bookmark)})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Bookmark added successfully',
                    text: 'Thanks for add this blog',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }
   
    const handleDelete = _id => {
      console.log(_id);
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
          fetch(`https://blog-server-tawny-iota.vercel.app/news/${_id}`,{
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
            }
          })
        }
      })
    }
    return (<>
      <div>
        <div className='flex gap-5 my-8 mb-6 '>
            <div className='md:w-1/2 my-auto'>
              <h2 id="title" className='text-4xl text-amber-700 text-center font-semibold'>{title}</h2>
              <h3 id="category" className='text-lg font-semibold mb-4 text-blue-400 text-center'># {category}</h3>
              <div className="m-auto w-7 h-7"><button onClick={handleBookMark}><HiBookmark className="m-auto w-7 h-7  hover:scale-110"></HiBookmark></button></div>
            </div>
            <div className='md:w-1/2'>
              <img  className='rounded' id="image" src={image} alt="" />
            </div>
            <div className="h-[150px] m-auto">
               <Link to={`/update/${_id}`}  className="hover:bg-green-600 hover:text-white p-3 border rounded-md font-bold bg-base-300 border-emerald-500">Update</Link>
               <button onClick={() => handleDelete(_id)} className="hover:bg-red-600 hover:text-white mt-[60px] p-3 border border-red-500 rounded-md font-bold bg-base-300">Delete</button>
            </div>             
        </div>
        <p id="description" className="mb-10 text-xl px-8">{description}</p>
        </div>          
        <Comment></Comment>
        </>
    );
};

export default Details;