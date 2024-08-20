import style from "../scss/pages/womenpage.module.scss"
import ByProductNav from "../components/smalls/ByProductNav";

const WomenPage = () => {
  return (
    <main className={style.main_container}>
      <h1>Women</h1>
        <ByProductNav/>
    </main>
    
  )
}

export default WomenPage