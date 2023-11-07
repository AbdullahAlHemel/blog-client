// import { Link, useLoaderData } from 'react-router-dom';
// import Comment from "../Details/Comment";

// const DetailsBookMarks = () => {
//     const news = useLoaderData()
//     const {_id, title, image, description, category }= news;
//     return (
//      <>
//         <div>
//         <div  className='flex gap-5 my-8 mb-6 '>
//             <div className='w-1/2 my-auto'>
//               <h2 id="title" className='text-4xl text-amber-700 text-center font-semibold'>{title}</h2>
//               <h3 id="category" className='text-lg font-semibold mb-4 text-blue-400 text-center'> {category}</h3>
//              {/* <div className="m-auto w-7 h-7"><button onClick={handleBookMark}><HiBookmark className="m-auto w-7 h-7  hover:scale-110"></HiBookmark></button></div> */}
//             </div>
//             <div className='md:w-1/2 w-full'>
//               <img  className='rounded' id="image" src={image} alt="" />
//             </div>
//             <div className="h-[50px] m-auto">
//                <Link to={`/update/${_id}`}  className="hover:bg-green-600 hover:text-white p-3 border rounded-md font-bold bg-base-300 border-emerald-500">Update</Link>
//             </div>
             
//         </div>
//         <p className="mb-10 text-xl px-8">{description}</p>
//         </div>
//         <Comment></Comment>
//         </>
//     );
// };

// export default DetailsBookMarks;
