import { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
        <Route path='/country/:name' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
