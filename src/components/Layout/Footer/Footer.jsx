import React from 'react';
import '../../Layout/Footer/footer.css'
import payment from '../../../assets/payment.svg'
import { Button } from '../../Button';
import iconArrow from '../../../assets/arrow.svg'
import iconFacebook from '../../../assets/facebook.svg'
import iconTwitter from '../../../assets/twiter.svg'
import iconLinked from '../../../assets/linkedin.svg'
import iconInstagram from '../../../assets/instagram.svg'
/**
 * Primary UI component for user interaction
 */
export const Footer = ({ }) => {

    return (
        <div className='grid-footer'>
            <div className="top-footer">
                <div className="footer-menu">
                    <h6 className="footer-title">Lisa</h6>
                    <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</p>
                    <div className="footer-icon">
                        <img src={iconFacebook} alt="icon" />
                        <img src={iconTwitter} alt="icon" />
                        <img src={iconLinked} alt="icon" />
                        <img src={iconInstagram} alt="icon" />
                    </div>
                </div>
                <div className="footer-menu">
                    <h6 className="footer-title">Catalog</h6>
                    <a className='footer-link' href="#">Necklaces</a>
                    <a className='footer-link' href="#">Hoodies</a>
                    <a className='footer-link' href="#">Jewelry Box</a>
                    <a className='footer-link' href="#">T-Shirt</a>
                    <a className='footer-link' href="#">Jacket</a>                   
                </div>
                <div className="footer-menu">
                    <h6 className="footer-title"> About Us</h6>
                    <a className='footer-link' href="#">Our Producers</a>
                    <a className='footer-link' href="#">Sitemap</a>
                    <a className='footer-link' href="#">FAQ</a>
                    <a className='footer-link' href="#">About Us</a>
                    <a className='footer-link' href="#">Term & Conditions</a>                   
                </div>
                <div className="footer-menu">
                    <h6 className="footer-title"> Customer Services</h6>
                    <a className='footer-link' href="#">Contact Us</a>                   
                    <a className='footer-link' href="#">Track Your Order</a>                   
                    <a className='footer-link' href="#">Product Care & Repair</a>                   
                    <a className='footer-link' href="#">Book An Appointment</a>                   
                    <a className='footer-link' href="#">Shipping & Returns</a>                   
                </div>
            </div>
            <div className="bottom-footer">
                <div><p className="inc">&copy; 2023 LISA , Inc.</p></div>
                <div className="payment"><img src={payment} alt="icon" /></div>
                <div className="footer-btn">
                    <Button
                        width='150px'
                        height='32px'
                        padding=' 5px 15px'
                        gap='84x'
                        color='white'
                        backgroundColor='#1E2832'
                        label='Scroll To Top'
                        icon2={iconArrow}

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
        </div>
    );
};


