import React from 'react';

const Heading = ({subHeading,heading}) => {
    return (
        <div className='my-6 text-center'>
            <p className='text-yellow-500 py-2'>{subHeading}</p>
            <h1 className='text-2xl inline-block px-8 text-black border-y-4 py-2'>{heading}</h1>
            
        </div>
    );
};

export default Heading;