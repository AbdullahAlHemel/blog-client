import React from 'react';
import Banner from './Banner';
import RecentBlog from './RecentBlog';
import NewsLetter from './NewsLetter';
import WithUS from '../Components/WithUs/WithUS';
import Research from './Research';
import IconSec from './IconSec';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <RecentBlog></RecentBlog>
           <Research></Research>
           <IconSec></IconSec>
           <NewsLetter></NewsLetter>
           <WithUS></WithUS>
        </div>
    );
};

export default Home;