import React from 'react';
import boss from '../../src/assets/home/featured.jpg'
import Heading from '../SharedComponents/Heading';

const Freture = () => {
    return (


        <div className='bg-[url("../../src/assets/home/featured.jpg")] md:h-[500px]  relative my-12 bg-fixed  bg-black opacity-90  w-full bg-center object-contain'>
            
            <div className="absolute h-full inset-0 bg-black bg-opacity-50"></div>
            <div className= ' relative z-30'>
            
                <div className='py-6 text-white'><Heading subHeading='---Check it out---' heading='FROM OUR MENU'></Heading></div>



                <div className='md:flex w-9/12 mx-auto gap-12  py-2  items-center justify-center'>
                    <img className='md:w-2/5 h-auto ' src={boss} alt="" />
                    <div>
                        <h2 className='text-2xl text-white pb-2'>March 20, 2023 <br />
                            WHERE CAN I GET SOME?
                        </h2>
                        <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Freture;