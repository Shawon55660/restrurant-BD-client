import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannar1 from '../../src/assets/home/01.jpg'
import bannar2 from '../../src/assets/home/02.jpg'
import bannar3 from '../../src/assets/home/03.png'
import bannar4 from '../../src/assets/home/04.jpg'
import bannar5 from '../../src/assets/home/05.png'
import bannar6 from '../../src/assets/home/06.png'

const Bannar = () => {

    const img = [bannar1,bannar2,bannar3,bannar4,bannar5,bannar6]
    return (
       <div >
         <div >    
           <Carousel>
                {img.map((img,id)=> <div key={id}>
                    <img  src={img} />
                  
                </div>)}
               
               
            </Carousel>
            
        </div>
       </div>
    );
};

export default Bannar;