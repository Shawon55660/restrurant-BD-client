import React from 'react';
import Bannar from '../AllComponents/Bannar';
import Heading from '../SharedComponents/Heading';
import Category from '../AllComponents/Category';
import Boss from '../AllComponents/Boss';
import Menu from '../AllComponents/Menu';
import Contact from '../AllComponents/Contact';
import ChefRecommand from '../AllComponents/ChefRecommand';
import Freture from '../AllComponents/Freture';
import Reveiws from '../AllComponents/Reveiws';
import useMenu from '../CustomHooks/useMenu';

const Home = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div>
               <Bannar></Bannar>
               <Heading subHeading = '---From 11:00am to 10:00pm---' heading='ORDER ONLINE'></Heading>
               <Category></Category>
               <Boss></Boss>
               <Heading subHeading = '---Check it out---' heading='FROM OUR MENU'></Heading>
               <Menu menuCategory={popular} btn='see all offer'></Menu>
               <Contact></Contact>
               <Heading subHeading = '---Should Try---' heading='CHEF RECOMMENDS'></Heading>
               <ChefRecommand></ChefRecommand>
               <Freture></Freture>
               <Reveiws></Reveiws>
           
        </div>
    );
};

export default Home;