import React from 'react';
import '../stories/category.css'
import imgCategory1 from './assets/category1.svg'
import imgCategory2 from './assets/category2.svg'
import imgCategory3 from './assets/category3.svg'
import imgCategory4 from './assets/category4.svg'
import imgCategory5 from './assets/category5.svg'
export const Category = ({ }) => {

    return (
        <div className='category'>
            <p className='title'>Explore new and popular styles</p>

            <div>
                <img src={imgCategory1} alt="category" />
            </div>
            <div className='category-card'>
                <img src={imgCategory2} alt="category" />
                <img src={imgCategory3} alt="category" />
                <img src={imgCategory4} alt="category" />
                <img src={imgCategory5} alt="category" />
            </div>

        </div>
    );
};
