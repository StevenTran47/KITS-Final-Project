import React from 'react';
import { Header } from './Header';
import { Banner } from './Banner'
import { Brand } from './Brand'
import { Category } from './Category';
import './page.css';
import { Product } from './Product';
import { Widget } from './Widget';
import { Seller } from './Seller';
import { Instagram } from './Instagram';
import { Footer } from './Footer';
export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <div>
      <div className="topmain">
        <Header />
        <Banner />
      </div>
      <Brand />
      <Category />
      <Product />
      <Widget />
      <Seller />
      <Instagram />
      <Footer />
    </div>
  );
};
