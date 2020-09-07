import React, { Component } from 'react';
import logo from './logo.svg';
import ColourContainer from './ColourContainer/ColourContainer';
import './App.css';

//CLASS COMPONENT, WITH NO STATE!

class App extends Component {

  render() {
    return (
    <div className="App">
     
      <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Image Colour Gallery</h2>
      </header>

      
            <div className="color-section">
              
                
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  
                
           </div> 

           <div className="color-section1">
              
                
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  
                
           </div> 
           <div className="color-section2">
              
                
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  
                
           </div> 
           <div className="color-section3">
              
                
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  
                
           </div> 
           <div className="color-section4">
              
                
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  
                
           </div> 
           <div className="color-section5">
              
                
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  
                
           </div> 
           <div className="color-section6">
              
                
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  
                
           </div> 
           <div className="color-section7">
              
                
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  <ColourContainer />
                  
                
           </div> 

                   
    </div>

    );
  }
}

export default App;