import React from 'react';
import '../Instagram/instagram.css'
import { Card } from './Card';
import ins1 from '../../assets/ins1.svg'
/**
 * Primary UI component for user interaction
 */
export const Instagram = ({ }) => {

    return (
        <div className='grid-instagram'>
            <div className="section-title">
                <h1>Follow products and discounts on Instagram</h1>
            </div>
            <div className='section-ins'>
                <Card img = {ins1} />
                <Card img = {ins1} />
                <Card img = {ins1} />
                <Card img = {ins1} />
            </div>
            <div className="section-official">
                <h2 className='official'>@lisa.official</h2>
            </div>
        </div>
    );
};


