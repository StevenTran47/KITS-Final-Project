import React from 'react';
import '../stories/card.css'
import { Button } from './Button'
import iconHeart from '../../src/stories/assets/buy-icon-heart.svg'
import iconSearch from '../../src/stories/assets/buy-icon-search.svg'
import iconShop from '../../src/stories/assets/icon-shop.svg'

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
      <div className='hidden'>
        <img className='img-products' src={img} alt="img-products" ></img>
        <div className="buy">
          <img className='icon-heart' src={iconHeart} alt="" />
          <img className='icon-search' src={iconSearch} alt="" />
          <div className="card-btn">
            <Button
              width='180px'
              height='45px'

              gap='8px'
              color='white'
              backgroundColor='#1E2832'
              label='ShopNow'
              icon={iconShop}

              //fonts
              fontFamily='Roboto'
              fontStyle='normal'
              fontWeight={400}
              fontSize='29px'
              lineHeight='34px'
              /* identical to box height */

              textTransform='capitalize'
            />
          </div>
        </div>
      </div>
      <h6 className='title-product'>{title}</h6>
      <div className='section-card'>
        <p className='category-product'>{category}</p>
        <p className='price'>{price}</p>
       
      </div>

    </div>
  );
};


