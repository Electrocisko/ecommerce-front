/* eslint-disable react/prop-types */
import style from "../scss/modules/pagebuttons.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PageButtons = ({page,handleNextPage, handlePreviousPage }) => {
  return (
    <div className={style.container}>
        <button onClick={handlePreviousPage}><FaArrowLeft /> Previous</button>
        <div> {page} </div>
        <button onClick={handleNextPage}>Next <FaArrowRight /></button>
    </div>
  )
}

export default PageButtons;


