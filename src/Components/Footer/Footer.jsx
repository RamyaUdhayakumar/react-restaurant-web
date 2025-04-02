import React from "react";
import footerCSS from './../Footer/Footer.module.css'


function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>RoyalX</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate ipsum atque natus, explicabo placeat nulla perspiciatis aliquam, laborum obcaecati modi sint sed vitae. Quidem maxime alias dolorem vitae architecto!</p>
               </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Contact Us</p>
                <p>Rooms</p>
                <p>GYM</p>
                <p>Restaurant</p>
            </div>
            <div className={footerCSS.FooterLinks}>
            <h3>City Branches</h3>
                <p>Mexico</p>
                <p>India</p>
                <p>Germany</p>
                <p>Australia</p>
                <p>California</p>
                
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address: <span>360 street-Mumbai, India</span></p>
                <p>Email : <span>royalx123@gmail.com</span></p>
                <p>Phone: <span>9876543210</span></p>
            </div>





        </footer>
    )
}

export default Footer