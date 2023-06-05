import React from 'react';
import { Header } from './Header';
import { Banner } from './Banner'
import { Brand } from './Brand'
import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <div>
      <div className="topmain">
        <Header />
        <Banner />
      </div>
      <Brand />
    </div>
  );
};
