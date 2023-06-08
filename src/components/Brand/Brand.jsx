import React from 'react';
import '../../components/Brand/brand.css'
import brand1 from '../../assets/brand-1.svg'
import brand2 from '../../assets/brand-2.svg'
import brand3 from '../../assets/brand-3.svg'
import brand4 from '../../assets/brand-4.svg'
import brand5 from '../../assets/brand-5.svg'

export const Brand = ({ }) => {

    return (
        <div className='brand'>
           <img src={brand1} alt="icon" />
           <img src={brand2} alt="icon" />
           <img src={brand3} alt="icon" />
           <img src={brand4} alt="icon" />
           <img src={brand5} alt="icon" />          
        </div>
    );
};