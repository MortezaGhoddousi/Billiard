import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import CMS from './components/CMS/CMS';
import Login from './components/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className='App'>
       <BrowserRouter> 
          
          <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/shop"  element={<Shop />}/>
            <Route path="/cms/admin"  element={<CMS />}/>
            <Route path="/login"  element={<Login />}/>
          </Routes>

      </BrowserRouter> 
    </div>
  );
}

export default App;
