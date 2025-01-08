import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';
import { Link } from 'react-router-dom';


const Menu = ({menuCategory,btn,title}) => {

    



    return (

        <div>


            <div className='grid md:grid-cols-2 gap-8 mt-12 mb-8'>
                {
                    menuCategory.map(data => <MenuCard key={data._id} data={data}></MenuCard>)

                }
            </div>
            <div className='text-center my-4'>
              <Link to={`/order/${title}`}>  <button className=' border-black px-6 py-3 uppercase shadow-sm rounded-lg border-b-2'>{btn}</button></Link>
            </div>

        </div>
    );
};

export default Menu;