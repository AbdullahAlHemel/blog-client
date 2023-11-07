import Swal from 'sweetalert2'

const WithUS = () => {
 
    const handleSubmit = () => {
      Swal.fire({
        title: 'Thanks for Added',
        text: 'be updated ,be genius',
        icon: 'success',
        confirmButtonText: 'ok'
      })
    }

    return (
        <>
        <div className='mt-12 md:flex px-16 bg-violet-100 pb-5 md:pb-10 py-5 md:py-20 rounded-md mb-16'>
      <div className='md:w-1/2 w-full'>
     <h2 className='md:text-2xl font-semibold text-justify text-amber-950'>“Newspapers abound, and though they have endured decades of decline in readership and influence, they can still form impressive piles if no one takes them out to the trash.” </h2>
     <p className='text-right'>- Jon Stewart</p>
  </div> 
  <div className=' md:w-1/2 w-full'>
    <div className="float-right md:w-3/5 md:mt-0 my-12">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button onClick={handleSubmit} className="btn text-white hover:text-black bg-fuchsia-500 absolute top-0 right-0 rounded-l-none bg-black">Subscribe</button>
      </div>
    </div>
  </div>
  
  </div>
</>
    );
};

export default WithUS;