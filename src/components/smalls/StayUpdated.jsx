import style from "../../scss/modules/stayupdated.module.scss";
import { MdOutlineMail } from "react-icons/md";

const StayUpdated = () => {
  return (
  <div className={style.suscribe_container}>
    <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
    <form>
        <p> <MdOutlineMail/></p>
        <input type="text" placeholder="Enter your email address" />
        <button type="submit">Subscribe to Newsletter</button>
    </form>
  </div>
  )
}

export default StayUpdated