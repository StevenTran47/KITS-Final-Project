import React from 'react';
import '../stories/card.css'

/**
 * Primary UI component for user interaction
 */
export const Card = ({
    img,
    title,
    category,
    price,
  ...props
}) => {

  return (
    <div className='card'>
        <img className='img-products' src={img} alt="img-products" />
        <h6 className='title-product'>{title}</h6>
        <div className='section-card'>
            <p className='category-product'>{category}</p>
            <p className='price'>{price}</p>
        </div>
    </div>
  );
};


