import { Route, Routes } from 'react-router-dom';
import MisdemeanourList from './components/MisdemeanourList';
import ConfessionForm from './components/ConfessionForm';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import React, { useState, useEffect, useContext } from 'react';
import { Misdemeanour } from './types/misdemeanours.types';
import './App.css';

export const MisdemeanourContext = React.createContext<Misdemeanour[]>([]);

type MisdemeanourResponse = {
  misdemeanours: Misdemeanour[];
};

function App() {

  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  useEffect(() => {
    const fetchMisdemeanours = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/misdemeanours/10');
        if (response.ok) {
          const jsonResponse = await response.json() as MisdemeanourResponse;
          setMisdemeanours(jsonResponse.misdemeanours);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMisdemeanours();
  }, []);

  useContext(MisdemeanourContext);

  return (
    <MisdemeanourContext.Provider value={misdemeanours}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/misdemeanour" element={<MisdemeanourList />} />
          <Route path="/confession" element={<ConfessionForm />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </MisdemeanourContext.Provider>
  );
}

export default App;
