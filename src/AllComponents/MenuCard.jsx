import React from 'react';

const MenuCard = ({data}) => {
    
    return (
        <div>
            <div className='flex gap-4 items-start'>
            <img  style={{borderRadius:'0 200px 200px 200px'}} className='w-20 object-cover h-20' src={data.image} alt="" />
           <div>
           <h2 className='text-xl uppercase pb-2'>{data.name}---------------</h2>
           <p className='text-gray-500'>{data.recipe}</p>
           </div>
           <h3 className='text-yellow-500'>${data.price}</h3>
            </div>
            
        </div>
    );
};

export default MenuCard;