import Swal from 'sweetalert2'

const WithUS = () => {
    const handleSubmit = e => {
      {
        Swal.fire({
            title: 'Thank to updated with us',
            text: 'Thanks',
            icon: 'success',
            confirmButtonText: 'Done'
          })
    }}

    return (
        <>
        <div className='mt-12 flex px-16 bg-violet-100 pb-10 py-20 rounded-md mb-16'>
        {/* <h2 className=" p-10  text-base-content"> */}
  
  
  <div className='w-1/2'>
     <h2 className='text-2xl font-semibold text-justify text-amber-950'>“Newspapers abound, and though they have endured decades of decline in readership and influence, they can still form impressive piles if no one takes them out to the trash.” </h2>
     <p className='text-right'>- Jon Stewart</p>
  </div> 
  <div className=' w-1/2'>
  <form className='float-right'>
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button onClick={handleSubmit} className="btn text-white hover:text-black bg-fuchsia-500 absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </form>
  </div>
  
  </div>
</>
    );
};

export default WithUS;