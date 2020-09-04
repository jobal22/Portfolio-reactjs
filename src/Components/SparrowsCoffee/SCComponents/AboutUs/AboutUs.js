import React from 'react';
import onehour from '../../Img/1hour.png';
import twohour from '../../Img/2hour.png';
import threehour from '../../Img/3hour.png';
import custom from '../../Img/custom.png';

import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='aboutUs'>
      <section className='bookEvent'>
        <div className='bookEvent__background'/>
        <div className='bookEvent__content'>
          <h1>Craft Coffee. <br className='bookEvent__break'></br>Anywhere.</h1>
          <button><div className='aboutUsLink'>Book Event</div></button>
        </div>
      </section>
      <section className='passion'>
        <div className='passion__background'/>
          <h3>Our Passion</h3>
          <p>Who says no to coffee? Did you know a person’s ability to smell can evoke particular memories; the scent of a freshly pulled shot of espresso will bring your guests back to that star-lit night they were given the opportunity to sip on a drink they just could not forget. You bring the people, we bring the coffee. Let us make your dreams come true by providing not only the best coffee but enhancing your event that allows you to sit down and enjoy..... Or get up and get more. At Sparrows, we are committed to offering you the best coffee at your next event!</p>
      </section>
      <section className='teamMember'>
        <div className='teamMember__background'/>
        <div className='teamMember__content'>
          <h1>Coffee with Personality</h1>
          <button><div className='aboutUsLink'>Meet Our Team</div></button>
        </div>
      </section>
      <section className='passion custom'>
        <div className='custom__background'/>
        <h3>Packages</h3>
        <p>Choose which package best fits your event.  We will have enough product to serve one drink to all your guests and an additional 10%, just in case.  Make your selection when filling out the booking form.</p>
        <div className='priceCollection'>
          <div className='priceOptions'>
            <div className='prices'>
              <img className='priceLogo' src={onehour} alt='options1'/>
              <p className='priceInfo'>$350 | 50 guests</p>
            </div>
            <div className='prices'>
              <img className='priceLogo' src={twohour} alt='options2'/>
              <p className='priceInfo'>$700 | 100 guests</p>
            </div>
            <div className='prices'>
              <img className='priceLogo' src={threehour} alt='options3'/>
              <p className='priceInfo'>$1050 | 150 guests</p>
            </div>
            <div className='prices'>
              <img className='priceLogo' src={custom} alt='options4'/>
              <p className='priceInfo'>Customize Your Event</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="AU__footer">
        <ol className='footIcon'>
          <li><div className='fIcon far fa-envelope'></div></li>
          <li><div className='fIcon fab fa-linkedin-in'></div></li>
          <li><div className='fIcon fab fa-instagram' ></div></li>
        </ol>
        <p>COPYRIGHT © 2020 SPARROWS COFFEE CO. | ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  )
}
