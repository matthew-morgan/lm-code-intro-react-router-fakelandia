import { Route, Routes } from 'react-router-dom';
import Misdemeanour from './components/Misdemeanour';
import Confession from './components/Confession';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import './App.css';

function App() {
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
