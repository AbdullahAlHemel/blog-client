import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div><div className='m-auto mt-56 w-44'>
            <h2 className='text-red-400 font-semibold text-center text-[40px]'>Error 404</h2>
            <button className='btn ml-12 mt-2'><Link>Home</Link></button></div>
        </div>
    );
};

export default ErrorPage;