
import "./App.css"
import Navbar from './components/Navbar';
import Text from './components/TextUpdate';
import About from './components/About';
import React, { useState} from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router,
   Routes, 
   Route
  } from "react-router-dom";


function App(){

  const [mode, setMode] = useState('light');     // dark mode is enable or not 
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500); // Dismiss the alert after 1.5 seconds
    
  };

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background='grey';
      showAlert("Dark mode has been enable", "success");
    }
    else
    {
        setMode('light')
        document.body.style.background='white';
        showAlert("light mode has been enable", "success");

    }

   
  }
 

 
        return (
    <>
      <Router>
        <Navbar title="Textall" about="about-us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element={<About   mode={mode} />} />
            <Route exact path="/TextUpdate" element={<Text heading="This is demo." mode={mode}   showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
      
}

export default App;