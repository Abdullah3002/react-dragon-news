import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 pb-6'> 
              <h2 className='text-3xl'>Login With</h2>
            <button className='btn btn-outline w-full'>
              <FcGoogle />
                Login With Google
            </button>
            <button className='btn btn-outline w-full'>
             <FaGithub />
                Login With Google
            </button>

              </div>
              
            <div className='p-4 pb-6'> 
              <h2 className='text-3xl mb-4'>Find Us on</h2>

            <a className='p-3 flex text-lg items-center border rounded-t-lg' href="">
            <FaFacebook className='mr-3' />
            Facebook
            </a>
            <a className='p-3 flex text-lg items-center border ' href="">
            <FaTwitter className='mr-3' />
            Twitter
            </a>
            <a className='p-3 flex text-lg items-center border rounded-b-lg' href="">
            <FaInstagram className='mr-3' />
            Instagram
            </a>
              
            </div>

            {/* q zone */}

            <div className='p-4 space-y-3 pb-6'> 
              <h2 className='text-3xl'>Login With</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />

              </div>

        </div>
    );
};

export default RightSideNav;