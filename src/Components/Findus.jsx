import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Findus = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find us on</h2>
            <div className='join flex join-vertical *:bg-base-100'>
                <button className='btn join-item justify-start'>
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className='btn join-item justify-start'>
                    <FaInstagram></FaInstagram>Instagram
                </button>
                <button className='btn join-item justify-start'>
                    <FaTwitter></FaTwitter> Twitter
                </button>
                <button className='btn join-item justify-start'>
                   <FaGithub></FaGithub> GitHub
                </button>
            </div>
        </div>
    );
};

export default Findus;