 import Swal from 'sweetalert2'

const AddBlog = () => {
    const handleAddBlog = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.value;
        const description = form.description.value;
        const news = {title, category, description, image}
        console.log(news);

        //send data to the server
        fetch('https://blog-server-tawny-iota.vercel.app/addnews', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // Corrected the header name
    },
    body: JSON.stringify(news)})
    .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Added',
                    text: 'Thanks',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <div>
          <div className='border md:p-12 md:m-10 rounded bg-base-200'>
            <h2 className='text-center text-yellow-500 font-bold text-[25px]'>Add a blog</h2>

        <form onSubmit={handleAddBlog}>
           <div className="form-control md:w-full ">
               <label className="label">
                   <span className="label-text">select a Category</span>
               </label>
               <label className="input-group">
               <select name="category" id="category" className='md:w-full h-12 text-lg text-center'>
                    <option value="International News">International News</option>
                    <option value="Health Care">Health Care</option>
                    <option value="Sports">Sports</option>
                    <option value="Food">Food</option>
                    <option value="Self Development">Self Development</option>
                    <option value="Carrier">Carrier</option>
                </select>
               </label>
              </div>

           <div className=' mb-0'>
              <div className="form-control w-full">
               <label className="label">
                   <span className="label-text">Title</span>
               </label>
               <label className="input-group">
                   <input type="text" name='title' placeholder="Title" 
                   className="input input-bordered w-full" />
               </label>
              </div>

    
           </div>
           <div className='mb-8'>
              <div className="form-control w-full ">
              <label className="label">
                   <span className="label-text">Photo URL</span>
               </label>
               <label className="input-group">
                   <input type="text" name='image' placeholder="Image" 
                   className="input input-bordered w-full" />
               </label>
              <label className="label">
                   <span className="label-text">Description</span>
               </label>
              <label className="input-group my-2">
                   <textarea type="text" name='description' placeholder="Description"
                    className="input input-bordered w-full h-32 p-4" />
               </label>
               
              </div>
           </div>
           <input type="submit" value="Add" className='btn btn-neutral w-full' />
        </form>
       </div>
        </div>
    );
};

export default AddBlog;
