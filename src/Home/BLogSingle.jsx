import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiBookmark } from "react-icons/hi2";
import Swal from 'sweetalert2'  
import { AuthContext } from '../auth/AuthProvider';

const BLogSingle = ({news}) => {

    const {user} = useContext(AuthContext)
    const {_id, title, image, description, category }= news

    const handleBookMark = event => {
        event.preventDefault()
   
        const title = news.title
        const category = news.category
        const image = news.image
        const email = user.email
        const News_Id = news._id;
        const description = news.description
        const bookmark = {title, category, News_Id, email ,description, image}
        console.log(bookmark);
        fetch(`http://localhost:5000/bookmark`, {
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
    return (
        <div className='border rounded hover:scale-105 duration-75'>
            <img src={image} className='rounded' alt="" />
            <div className='p-4'>
            <h3 className='text-2xl text-amber-700 text-center font-semibold'>{title}</h3>
           <div className='flex my-2'>
            <h3 className='text-sm mb-1 md:ml-[60px] ml-9 text-blue-400'># {category}</h3>
          { user? 
            <div className="m-auto w-7 h-7"><button ><HiBookmark onClick={handleBookMark} className="m-auto w-6 h-6  hover:scale-110"></HiBookmark></button></div>
         : 
         <div className="m-auto w-7 h-7"><button ><Link to='/login'><HiBookmark className="m-auto w-6 h-6  hover:scale-110"></HiBookmark></Link></button></div> 
        } 
            </div>
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