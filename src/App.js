
import './App.css';
import { Routes,Route,} from 'react-router-dom';
import Pfhome from './pages/Pfhome';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'element={ <Pfhome/>}/>
      <Route path ='/login'element={ <Auth/>}/>
      <Route path ='/register'element={ <Auth register/>}/>
      <Route path ='/dashboard'element={ <Dashboard/>}/>
      <Route path='/projects'element={ <Projects/>}/>

       </Routes>

       <Footer/>
    </div>
  );
}

export default App;
