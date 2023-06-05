import React from 'react';
import '../stories/banner.css'
import { Button } from './Button'
import iconShop from './assets/icon-shop.svg'
import banner from '../stories/assets/banner.svg'
import bannerBorder from '../stories/assets/banner-border.svg'
/**
 * Primary UI component for user interaction
 */
export const Banner = ({ }) => {

    return (
        <div className='banner'>
            <div className='product'>
                <h1>Collections</h1>
                <h3>you can explore ans shop many differnt collection
                    from various barands here.</h3>
                    <Button 
                        width= '223px'
                        height= '72px'
                        padding= ' 19px 26px'
                        gap= '8px'
                        color= 'white'
                        backgroundColor= '#1E2832'
                        label= 'ShopNow'
                        icon= {iconShop}
                    
                        //fonts
                        fontFamily= 'Roboto'
                        fontStyle= 'normal'
                        fontWeight= {400}
                        fontSize= '29px'
                        lineHeight= '34px'
                        /* identical to box height */
                    
                        textTransform= 'capitalize'
                     />
            </div>
            <div className='img-product'>
                <img className='img-banner' src={banner} alt="banner" />
                <img className='banner-border' src={bannerBorder} alt="banner-border" />
            </div>
        </div>
    );
};


