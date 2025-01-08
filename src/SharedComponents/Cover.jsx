import React from 'react';



const Cover = ({ title, details }) => {
    return (
        <div>


           
                <div className={` bg-cover w-full   h-[500px] bg-center`}>

                    <div className='flex-col flex items-center h-full md:w-7/12 mx-auto  justify-center'>
                        <div className='bg-[#0000007c] py-8 text-white text-center px-16 '>
                            <h2 className='text-4xl font-light py-2'>{title}</h2>
                            <p className='leading-8'>{details}</p>
                        </div>
                    </div>


                </div>

           
        </div>
    );
};

export default Cover;