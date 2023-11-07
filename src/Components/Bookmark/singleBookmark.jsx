import { Link } from 'react-router-dom';

const SingleBookmark = ({bookmark, handleDelete}) => {

    const {_id, title, image, category , News_Id, description} = bookmark;


    return (
        <div className='border p-4 my-1 rounded flex '>
            <img className='w-1/3 rounded' src={image} alt="" />
            <div className=' m-auto'>
                <h2 className='text-center md:text-[22px]  font-semibold'>{title}</h2>
                <p className='mb-1 md:text-x[20px] text-gray-600 text-center'>{category}</p>
                <p className='text-center w-70 mb-2'>{description.slice(0,30)}...</p>
                 <Link to={`/news/${News_Id}`} className='ml-[42%] bg-purple-500 p-1 rounded-lg md:font-bold text-white'>Details</Link>
                 
            </div>
            <button onClick={() => handleDelete(_id)}><img className='w-6' src="https://i.ibb.co/Lxk2gbr/clipart842915.png" alt="" /></button>
        </div>
    );
};

export default SingleBookmark;