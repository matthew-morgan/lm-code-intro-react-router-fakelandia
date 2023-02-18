import { Route, Routes } from 'react-router-dom';
import Misdemeanour from './components/Misdemeanour';
import Confession from './components/Confession';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/misdemeanour" element={<Misdemeanour />} />
      <Route path="/confession" element={<Confession />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
