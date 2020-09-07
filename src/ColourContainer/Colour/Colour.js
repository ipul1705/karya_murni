import React from 'react';

//FUNCTIONAL COMPONENT
const colour = ( props ) => {

  let spotColour = ("rgb(" + props.c1 +", "+ props.c2 +", "+ props.c3 +", "+ props.c4 +")");

//renders the random colour using passed props  
  const divstyle = {
  backgroundColor: spotColour,
  width: '3vw',
  height: '3vw',
  //borderRadius: '10%',
  textAlign: 'center',
  display: 'inline-block'
  };

  const divstyle1 = {
    backgroundColor: spotColour,
    width: '3vw',
    height: '3vw',
    borderRadius: '10%',
    textAlign: 'center',
    display: 'inline-block'
    };
  


 return (
    <div style={divstyle}
         onClick={props.clicked}>
    </div>
    
  );
};

export default colour;