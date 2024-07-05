import style from "../scss/modules/footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.card}>
        <h2>SHOP.CO</h2>
        <div>
        <p>
          We have clothes that suits your style and which you’re proud to wear. </p>
          <p>From women to men.</p>
        </div>
     
      </div>

      <div className={style.card}>
        <h3>COMPANY</h3>
        <div className={style.links}>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Works</a>
        <a href="">Career</a>
        </div>
      
      </div>

      <div className={style.card}>
        <h3>HELP</h3>
        <div className={style.links}>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Works</a>
        <a href="">Career</a>
        </div>
      
      </div>

      <div className={style.card}>
        <h3>FAQ</h3>
        <div className={style.links}>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Works</a>
        <a href="">Career</a>
        </div>
    
      </div>

      <div className={style.card}>
        <h3>RESOURCES</h3>
        <div className={style.links}>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Works</a>
        <a href="">Career</a>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
