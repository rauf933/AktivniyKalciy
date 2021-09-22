import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/fontawesome-free-solid';





class Language extends Component{

	constructor(props){
		super(props);
		
		this.state = {
			stateDrop: false,
			language: this.props.language
		}
	}

	handleClick(value){

		this.setState({language: value});
		this.cookieSet(value);
		window.location.reload();

	}

	cookieSet(text, expires){

	let date = new Date(Date.now() + 86400e3);
	date = date.toUTCString();
	document.cookie = "language="+text+"; path=/; expires="+date;
	}


	render(){

		let dataState = this.state.stateDrop?'active':'sleep';
		let flag = './image/flag/'+this.state.language+'.png';
		

		return(
			<div className="translation-block col-md-6 position-relative" onClick={()=>this.setState({stateDrop: !this.state.stateDrop})}>
			<div className="select-language position-relative bg-light">
			<span className="cont-select">
			<img src={flag} className="img-cover" alt="" style={{marginBottom:'10px'}}/>
			</span>
			<span className="arrow-btn position-absolute"><FontAwesomeIcon icon={faSortDown} /></span>
			</div>
			<div className="dropdown-select position-absolute bg-light" data-state={dataState} >
			<div className="item-select" value='ru' onClick={()=>this.handleClick('ru')}>
			<span className="cont-select"><img src='./image/flag/ru.png' alt="" className="img-cover"/></span>
			<span className="d-block" style={{fontSize:'0.75rem', paddingTop:'5px'}}>ru</span>
			</div>
			<div className="item-select" value='uz' onClick={()=>this.handleClick('uz')}>
			<span className="cont-select"><img src='./image/flag/uz.png' className="img-cover"/></span>
			<span className="d-block" style={{fontSize:'0.75rem', paddingTop:'5px'}}>uz</span>
			</div>
			</div>
			</div>
			
		)
	}
}

export default Language;

