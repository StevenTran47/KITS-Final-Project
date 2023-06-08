import React from 'react';
import '../Widget/widget.css'
import { Button } from './Button'
import background from '../../assets/background.svg'
import zara1 from '../../assets/zara1.svg'
import zara2 from '../../assets/zara2.svg'
/**
 * Primary UI component for user interaction
 */
export const Widget = ({ }) => {

    return (
        <div className='widget' style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover ',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* <img className='background' src={background} alt="background" /> */}
            <img className='zara1' src={zara1} alt="zara1" />
            <img className='zara2' src={zara2} alt="zara2" />
            <p className='zara-title'>Lustrous yet understated. The new evening
                wear collection exclusively offered at the
                reopened Giorgio Armani boutique in Los
                Angeles.</p>
            <div className="zara-btn">
                <Button
                    width=' 245px'
                    height='72px'
                    padding='19px 26px'
                    gap='8px'
                    label='See Collection'
                    color='#1E283'
                    backgroundColor='#FFFFFF'

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
    );
};


