import './App.css'; // don't ever whack this line, b/c it ensures that all child files that need this css file can use it
import React, {useState, useEffect} from 'react'; 
import PokeCallCmp from './components/PokeCallCmp';

function App() {

  return (
    <PokeCallCmp />

  );
}

export default App;
