import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home, Experience, Projects, Contact } from './pages';
import Stars from './components/Stars';


const App = () => {
 return (
  <div className="bg-dark-background text-dark-text h-full">
   <Router>
    <Stars />
    <Navbar />
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/experience' element={<Experience />} />
     <Route path='/projects' element={<Projects />} />
     <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
   </Router>
  </div>
 )
};

export default App