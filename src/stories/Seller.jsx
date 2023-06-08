import React from 'react';
import '../components/Seller/seller.css'
import carousel from './assets/carousel.svg'
import { Button } from './Button';
import { Card } from './Card';
import Carousel from './Carousel'
/**
 * Primary UI component for user interaction
 */
export const Seller = ({ }) => {

    return (
        <div className='grid-seller'>
            <div className="section-title">
                <h1>Best Seller</h1>
            </div>
            <div className="section-seller">
                <div className='section-cate'>
                    <a className='main' href="#">All Product</a>
                    <a href="#">T-Shirt</a>
                    <a href="#">Hoodies</a>
                    <a href="#">Jacket</a>
                </div>
                <div>
                    <Button
                        width='105px'
                        height=' 32px'
                        padding='5px 15px'
                        gap='4px'
                        color='white'
                        backgroundColor=' #1E2832'
                        label='Show All'

                        //fonts
                        fontFamily='Open Sans'
                        fontStyle='normal'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='22px'
                        /* identical to box height */

                        textTransform='capitalize'
                    />
                </div>
            </div>
            <div className="slider">
            <Carousel
                show={4}
            >
                <div>
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                </div>
                <div>
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                </div>
                <div>
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                </div>
                <div>
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                </div>
                <div>
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                </div>
                <div>
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                </div>
                <div>
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                </div>
                <div>
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                </div>
            </Carousel>
                {/* <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                />
                <Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                /><Card
                    img={carousel}
                    title='Adicolor Classics Joggers'
                    category='Dress'
                    price='$63.85'
                /> */}
            </div>
        </div>
    );
};


