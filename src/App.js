import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
*/
function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }


  const toggleState = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'purple';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    {/*<Router>
    <Navbar title="Website" mode={mode} toggleState={toggleState}/>
    <Alert alert={alert}/>
    <div className="container my-2">
      <Switch>
        <Route exact path="/">
        <TextForm heading="Analyse the Text" mode={mode} showAlert={showAlert}/>
        </Route>
        <Route exact path="/about">
        <About/>
        </Route>
      </Switch>
    </div>
    </Router>*/}
    <Navbar title="Website" mode={mode} toggleState={toggleState}/>
    <Alert alert={alert}/>
    <div className="container my-2">
        <TextForm heading="Analyse the Text" mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );    
}

export default App;