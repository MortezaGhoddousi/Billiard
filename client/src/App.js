import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import CMS from './components/CMS/CMS';
import Login from './components/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createContext } from 'react';

export const nameContext = createContext();

function App() {
  const [snooker, setSnooker] = useState([]);
  const [billiard, setBilliard] = useState([]);


  useEffect(() => {
    const getTables = async () => {
        try {
            const result = await axios.get('http://localhost:8000/api/table');
            result.data.forEach(element => {
                if (element.description === 'snooker') {
                    setSnooker(prevSnooker => [...prevSnooker, { id: element.tableNumber, price: element.pricePerHour }]);
                } else if (element.description === 'pocket') {
                    setBilliard(prevBilliard => [...prevBilliard, { id: element.tableNumber, price: element.pricePerHour }]);
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    getTables();
}, []);

  return (
    <div className='App'>
      <BrowserRouter> 
        <nameContext.Provider value={[snooker.slice(0, snooker.length/2), billiard.slice(0, billiard.length/2)]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cms/admin" element={<CMS />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </nameContext.Provider>
      </BrowserRouter> 
    </div>
  );
}

export default App;
