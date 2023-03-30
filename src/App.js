import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navb from './Component/Navb';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      <Navb />
       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<Profile />} />
      </Routes>
     
    </div>
  );
}

export default App;
