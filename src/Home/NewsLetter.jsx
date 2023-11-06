import React from 'react';

const NewsLetter = () => {
    return (
        <div className='border-b'>
            <h2 className='text-center text-3xl pt-12 pb-6 font-bold border-b'>Weekly Best Blog post</h2>
            <div className='flex gap-8'>
                <div className='w-1/2'>
                    <img className='rounded' src="https://i.ibb.co/vj4vP4d/1680250474007.png" alt="" />
                </div>
                <div className='w-1/2 m-auto text-justify '>
                    <h2 className='text-[25px] font-semibold'>Global fall of American dollar</h2>
                    <p className='font-medium'>One of the more intriguing financial trends of 2023 has been the de-dollarization movement. This is an effort by a growing number of countries to reduce the role of the U.S. dollar in international trade. Countries like India, China, Brazil and Malaysia, among others, are seeking to set up trade channels using currencies other than the almighty dollar. With so much of the world economy reshaping itself in the post-pandemic landscape, is the reserve status of the U.S. dollar going to be the next domino to fall.</p>
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;