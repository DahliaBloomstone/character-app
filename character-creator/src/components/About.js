//presentational components 
//by convention, put all components in component folder 
//between the components i am passing data and handling events 

import React from 'react';


//define the element 
//using const because i am writing in modern javascript
//set to a JSX expression
//className attribute is not simply class because it is a JSX expression
//cannot use class property on an object bc it is a reserved keyword in javascript  
const About = () => {
  return (
    <div className='About'>
      <h1>About <b>Character Creator </b></h1>
 <h3> <p>Character Creator is an app with a React/Redux frontend and a Rails backend! <a href="https://github.com/DahliaBloomstone/react-redux-app/tree/main/character-creator/src/components" target="_blank" rel="noopener noreferrer">Visit</a> the repo to learn more.</p> </h3> 
      <p> Also check out: https://github.com/DahliaBloomstone/Character-creator </p>
    </div>
  )
}


//export and import are part of the ES5 module system
//it is a self contained unit that can exose assets to other modules 
export default About;
