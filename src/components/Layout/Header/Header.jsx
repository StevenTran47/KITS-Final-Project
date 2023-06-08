import React from 'react';
import iconSearch from '../../../assets/icon-search.svg';
import iconAccount from '../../../assets/icon-account.svg';
import iconCart from '../../../assets/icon-cart.svg';
import '../../Layout/Header/header.css';

export const Header = ({
  icon,
  ...props 
}) => (
  <header>
    <div className='icon-search'><img src={iconSearch} alt="icon" /></div>
    <div className='brand'>Lisa Store</div>
    <div className='header-user'>
      <div className='header-icon'><a href="#"><img src={iconAccount} alt="icon" /> Account</a></div>
      <div className='header-icon'><a href="#"><img src={iconCart} alt="icon" /> Shopping</a></div>
    </div>
  </header>
);
