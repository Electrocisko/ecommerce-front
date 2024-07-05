import './app.scss';
import Navbar from './components/Navbar';
import HomeMain from './components/HomeMain';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <Navbar/>
      <HomeMain/>
      <Footer/>
    </div>
  )
}

export default App