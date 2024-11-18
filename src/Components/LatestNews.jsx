import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 px-3 py-4 bg-gray-300 items-center font-poppins'>
            <p className='bg-[#D72050] text-white px-4 py-3'>
                Latest
            </p>
           <Marquee speed={100} pauseOnHover direction='right'>
           <Link className='mr-5' to={"/news"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nihil?</Link>
                <Link className='mr-5'to={"/game"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nihil?</Link>
                <Link className='mr-5'to={"/football"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nihil?</Link>
                <Link to={"/cover"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nihil?</Link>
           </Marquee>
          
          
        </div>
    );
};

export default LatestNews;