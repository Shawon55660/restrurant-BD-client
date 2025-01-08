import React from 'react';
import Cover from '../SharedComponents/Cover';
import img from '../../src/assets/menu/banner3.jpg'
import dessert from '../../src/assets/menu/dessert-bg.jpeg'
import pizza from '../../src/assets/menu/pizza-bg.jpg'
import salad from '../../src/assets/menu/salad-bg.jpg'
import soup from '../../src/assets/menu/soup-bg.jpg'
import Menu from '../AllComponents/Menu';
import useMenu from '../CustomHooks/useMenu';
import Heading from '../SharedComponents/Heading';
import { Parallax } from 'react-parallax';
import SimpleParallax from 'simple-parallax-js';
const MenuCategory = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const pizzas = menu.filter(item => item.category === 'pizza')

    return (
        <div>

            {/* offered section  */}
            <Parallax 
             blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}>
                
            <Cover title='OUR MENU' details='Would you like to try a dish?' ></Cover>
            </Parallax>
            <Heading subHeading="---Don't miss---" heading="TODAY'S OFFER"></Heading>
            <Menu menuCategory={offered} title='drinks' btn='ORDER YOUR FAVOURITE FOOD'></Menu>

            {/* desserts section  */}
           <Parallax 
            blur={{ min: -50, max: 50 }}
            bgImage={dessert}
            bgImageAlt="the menu"
            strength={-200}>
           <Cover title='DESSERTS' details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
           </Parallax>
            <Menu menuCategory={desserts} title='desserts' btn='ORDER YOUR FAVOURITE FOOD'></Menu>

            {/* salad section  */}
            <Parallax
             blur={{ min: -50, max: 50 }}
             bgImage={salad}
             bgImageAlt="the menu"
             strength={-200}
             >
            <Cover title='SALADS' details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            </Parallax>
            <Menu menuCategory={salads} title='salad' btn='ORDER YOUR FAVOURITE FOOD'></Menu>

             {/* soup section  */}
             <Parallax
              blur={{ min: -50, max: 50 }}
              bgImage={soup}
              bgImageAlt="the menu"
              strength={-200}>
             <Cover title='SOUPS' details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
             </Parallax>
            <Menu menuCategory={soups} title='soups' btn='ORDER YOUR FAVOURITE FOOD'></Menu>

             {/* pizza section  */}
            <Parallax 
             blur={{ min: -50, max: 50 }}
            bgImage={pizza}
            bgImageAlt="the menu"
            strength={-200}>
            <Cover title='PIZZA' details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            </Parallax>
            <Menu menuCategory={pizzas} title='pizza' btn='ORDER YOUR FAVOURITE FOOD'></Menu>

        </div>
    );
};

export default MenuCategory;