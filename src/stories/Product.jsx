import React from 'react';
import '../stories/product.css'
import { Button } from './Button';
import { Card } from './Card';
import iconFilter from './assets/icon-filter.svg'
import imgProduct1 from './assets/product1.svg'

/**
 * Primary UI component for user interaction
 */
export const Product = ({}) => {

    return (
        <div className='grid-products'>
            <div className="section-title">
                <h1>Or subscribe to the newsletter</h1>
            </div>
            <div className="section-product">
                <div className='section-cate'>
                    <a className='main' href="#">All Product</a>
                    <a href="#">T-Shirt</a>
                    <a href="#">Hoodies</a>
                    <a href="#">Jacket</a>
                </div>
                <div>
                    <Button
                        width='92px'
                        height='32px'
                        padding='5px 15px'
                        gap='4px'
                        color='white'
                        backgroundColor=' #1E2832'
                        label='Filter'
                        icon={iconFilter}
                        position='relative'
                        top='0px'
                        //font
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
            <div className="products">
                <Card
                     img = {imgProduct1}
                     title = 'Adicolor Classics Joggers'
                     category = 'Dress'
                     price = '$63.85'
                />
                <Card
                     img = {imgProduct1}
                     title = 'Adicolor Classics Joggers'
                     category = 'Dress'
                     price = '$63.85'
                />
                <Card
                     img = {imgProduct1}
                     title = 'Adicolor Classics Joggers'
                     category = 'Dress'
                     price = '$63.85'
                />
                <Card
                     img = {imgProduct1}
                     title = 'Adicolor Classics Joggers'
                     category = 'Dress'
                     price = '$63.85'
                />
                <Card
                     img = {imgProduct1}
                     title = 'Adicolor Classics Joggers'
                     category = 'Dress'
                     price = '$63.85'
                />
                <Card
                     img = {imgProduct1}
                     title = 'Adicolor Classics Joggers'
                     category = 'Dress'
                     price = '$63.85'
                />
                <Card
                     img = {imgProduct1}
                     title = 'Adicolor Classics Joggers'
                     category = 'Dress'
                     price = '$63.85'
                />
                <Card
                     img = {imgProduct1}
                     title = 'Adicolor Classics Joggers'
                     category = 'Dress'
                     price = '$63.85'
                />

            </div>
        </div>
    );
};


