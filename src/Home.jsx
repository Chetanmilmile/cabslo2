import './App.css';
import Banner from './components/Banner/Banner';
import Apps from './components/Apps/Apps';
import Services from './components/Services/Services';
import UpperNav from './components/Uppernavbar/UpperNav';
import Footer from './components/Footer/Footer';
import Testimonal from './components/Pages/Testimonal/Testimonal';

function Home() {
  return (
    <>
    <UpperNav/>
    <Banner/>
    <Services/>
    <Testimonal/>
    <Apps/>
    <Footer/>
    </>
  );
}

export default Home;