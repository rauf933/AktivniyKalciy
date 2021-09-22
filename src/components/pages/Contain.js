import React from 'react';

import {
  Switch,
  Route
} from "react-router-dom";


import About from './About';
import Product from './Product';
import Contacts from './Contacts';
import Reviews from './Reviews';
import Home from './Home';





function Contain(){
	return(
   
    <Switch>
          <Route path="/product" render ={Product} />
           
          <Route path="/about" render={About} />
            
          <Route path="/contacts" render={Contacts} />
          
          <Route path="/reviews" render={Reviews} />
           
          <Route path="/" exact render={Home} />
          
        </Switch>
        
	)
}

export default Contain;
