import { Route, Routes } from 'react-router-dom';
import Misdemeanour from './components/Misdemeanour';
import Confession from './components/Confession';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';
import { MisdemeanourKind } from './types/misdemeanours.types';
import './App.css';

function App() {

  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourKind[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/misdemeanours/10').then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((jsonResponse) => {
      setMisdemeanours(jsonResponse);
    });
  }, []);

  console.log(misdemeanours);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/misdemeanour" element={<Misdemeanour />} />
        <Route path="/confession" element={<Confession />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
