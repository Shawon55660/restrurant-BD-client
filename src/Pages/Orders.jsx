import React from 'react';
import { Parallax } from 'react-parallax';
import Cover from '../SharedComponents/Cover';
import order from '../../src/assets/shop/banner2.jpg'

import TabComponent from '../AllComponents/TabComponent';
import { useParams } from 'react-router-dom';


const Orders = () => {
    
    return (
        <div>
           <Parallax 
           bgImage={order}>
            <Cover title='OUR SHOP' details='Would you like to try a dish?'></Cover>
           </Parallax>
           <TabComponent></TabComponent>

        </div>
    );
};

export default Orders;