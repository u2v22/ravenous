import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Business from '../Business/Business';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList'

function App() {
  return (
    <div class="App">
    <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
