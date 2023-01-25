import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Home';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import FAQ from './components/Pages/FAQ/FAQ';
import ContactUs from './components/Pages/Contact/ContactUs';
import MyProfile from './components/Pages/User/MyProfile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/faq' element={<FAQ/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/profile' element={<MyProfile/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
