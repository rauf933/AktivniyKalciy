import React, {Component}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import './css/Menu.css';


class BurgerMenu extends Component{

	render(){
		return(
			<div className="burger-menu-container mt-10">
			<div className="btn-bar"><FontAwesomeIcon icon={faBars} /></div>		
			</div>
		)
	}
}

export default BurgerMenu;