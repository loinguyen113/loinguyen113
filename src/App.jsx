import React,{useState} from 'react';
import './App.css'
import Header from './components/Header';
import Body from './components/Body'

function App() {
  const[dark,setDarkMode] = useState(false);
  const toggle = (theme) => {
    return theme ? setDarkMode(!dark): theme
  }
  return (
    <div className={dark ? 'App dark' : 'App'}>
      <Header toggle={toggle} />
      <div className="container">
                <div className="main">
                    <Body/>
                </div>
            </div>
    </div>
  );
}

export default App;
