import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../CustomHooks/useMenu';
import ChefCard from './ChefCard';
import { useParams } from 'react-router-dom';

const TabComponent = () => {
    const [menu] = useMenu()
    const drink = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')

    const itemList = [salad, pizza, soup, dessert, drink]

    const itemCategory = ['salad', 'desserts', 'soups', 'pizza', 'drinks']

    

    const {category} = useParams()
    const initialIndex = itemCategory.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);



    return (
        <div className='my-8'>
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={`flex justify-center gap-6 border-none`}>
                    <div className='uppercase'>
                        {
                            itemCategory.map((item, id) => <Tab key={id}>{item}</Tab>)
                        }
                    </div>

                </TabList>

                {
                    itemList.map((item,id) => <TabPanel key={id}><div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>  {item.map(mylist => <ChefCard item={mylist} key={mylist._id}></ChefCard>)} </div></TabPanel>)
                }

            </Tabs>
        </div>
    );
};

export default TabComponent;