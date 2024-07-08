import style from "../scss/modules/footer.module.scss";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer >
      <div className={style.footer}>

      <div className={style.card_main}>
        <h2>SHOP.CO</h2>
        <div>
        <p>
          We have clothes that suits your style and which you’re proud to wear. </p>
          <p>From women to men.</p>
          <div className={style.socialnetworks}>
            <a href="/" className={style.icon}><FaSquareXTwitter /></a>
            <a href="/" className={style.icon} ><FaFacebook /></a>
            <a href="/" className={style.icon} ><FaInstagram /></a>
            <a href="/" className={style.icon} ><FaGithub /></a>
          </div>
        </div>
     
      </div>

      <div className={style.card}>
        <h3>COMPANY</h3>
        <div className={style.links}>
        <a href="/">About</a>
        <a href="/">Features</a>
        <a href="/">Works</a>
        <a href="/">Career</a>
        </div>
      
      </div>

      <div className={style.card}>
        <h3>HELP</h3>
        <div className={style.links}>
        <a href="/">Customer Support</a>
        <a href="/">Delivery Detailss</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Privacy Policy</a>
        </div>
      
      </div>

      <div className={style.card}>
        <h3>FAQ</h3>
        <div className={style.links}>
        <a href="/">Account</a>
        <a href="/">Manage Deliveries</a>
        <a href="/">Orders</a>
        <a href="/">Payments</a>
        </div>
    
      </div>

      <div className={style.card}>
        <h3>RESOURCES</h3>
<div className={style.links}>
        <a href="/">Free eBooks</a>
        <a href="/">Development Tutorial</a>
        <a href="/">How to - Blog</a>
        <a href="/">Youtube Playlist</a>
        </div>
      
      </div>
      </div>
      <div className={style.bottom}>
      <hr />
      <p>Shop.co © 2000-2023, All Rights Reserved</p>
      </div>

  
  
    </footer>
  );
};

export default Footer;
