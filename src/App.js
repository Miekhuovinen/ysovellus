import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar />
    <Header />
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contactus' element={<ContactUs/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
