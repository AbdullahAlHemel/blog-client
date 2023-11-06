import React from 'react';

const Comment = () => {
    const handleComment = e => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value
        console.log(comment);
    }

    return (<>       
    <form onSubmit={handleComment} className="form-control w-[700px] m-auto mb-8">
      <label className="label">
        <span className="label-text">Write a comment</span>
      </label>
      <div className="flex">
      <input type="text" name='comment'  placeholder="it is very impressive" className="input input-bordered w-full max-w-3xl" />
      <button className="btn btn-success rounded-3xl text-white font-bold ml-4">Sent</button></div>
    </form>

    <div className="chat chat-start w-[700px] m-auto my-1">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?w=826&t=st=1699250740~exp=1699251340~hmac=fd62826f33b1e6f4bcc074c8f3173073dc4e79d2c42fc21f8287ba2b4c3c8263" />
            </div>
         </div>
          <div className="chat-header ml-2 font-semibold text-lg text-blue-700">
            Asif Vai
          </div>
            <div className="chat-bubble text-xl">Relex, why think more !</div>
            <div className="chat-footer opacity-50">
            <time className="text-xs opacity-50">12:45</time>
        </div>
   </div>
    
    <div className="chat chat-start w-[700px] m-auto my-1">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-7119-ccs2io_6c9eb2ef.jpeg?region=0,0,600,450&width=480" />
            </div>
         </div>
          <div className="chat-header ml-2 font-semibold text-lg text-blue-700">
            Ira Islam
          </div>
            <div className="chat-bubble text-xl">A issue of great concern</div>
            <div className="chat-footer opacity-50">
            <time className="text-xs opacity-50">2:05</time>
        </div>
   </div></>
    );
};

export default Comment;