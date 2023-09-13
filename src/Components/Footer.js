import React from 'react'
import "../styles/Footer.css"
import fb from "../images/fb.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import pressPlay from "../images/pressPlay.png";
function Footer() {
  return (
    <div className='footContainer'>
<ul className='social'>
    <li><img src={fb} alt='fb' className='fLogo'/></li>
    <li><img src={instagram} alt='fb' className='fLogo'/></li>
    <li><img src={twitter} alt='fb' className='fLogo'/></li>
    <li><img src={pressPlay} alt='fb' className='fLogo'/></li>
</ul>
<ul className='social1'>
    <li className='fLogo'>Condition of Use</li>
    <li className='fLogo'>Privacy and Policy</li>
    <li className='fLogo'>Press Room</li>
</ul>
<p className='foot'>© 2021 MovieBox by Adriana Eka Prayudha  </p>
    </div>
  )
}

export default Footer