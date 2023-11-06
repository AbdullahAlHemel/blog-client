import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import Comment from '../Details/Comment';

const SingleBookmark = ({bookmark}) => {
    const {_id, title, image, category } = bookmark;

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
            }
          })
        }
      })
    }
    return (
        <div className='border p-4 my-2 rounded flex '>
            <img className='w-36 rounded' src={image} alt="" />
            <div className=' m-auto'>
                <h2 className='text-center text-[22px]  font-semibold'>{title}</h2>
                <p className='mb-1 text-center'>{category}</p>
                 <Link to={`/bookmark/${_id}`} className='ml-[42%] bg-purple-500 p-1 rounded-lg font-bold text-white'>Details</Link>
                 
            </div>
            <button onClick={() => handleDelete(_id)}><img className='w-6' src="https://i.ibb.co/Lxk2gbr/clipart842915.png" alt="" /></button>
        </div>
    );
};

export default SingleBookmark;