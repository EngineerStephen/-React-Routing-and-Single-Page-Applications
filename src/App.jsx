import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BrowseCharacters from './BrowseCharacters';
import CharacterDetails from './CharacterDetails.jsx';
import Comic from './Comic'; 

import { NotFound } from './NotFound';
import { Home } from './Home';
import './App.css';


function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<BrowseCharacters />} />
        <Route path='/characters/:id' element={<CharacterDetails />} />
        <Route path='/comics' element={<Comic />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;