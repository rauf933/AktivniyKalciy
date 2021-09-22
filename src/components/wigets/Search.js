import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import search_ru from "./data-search/search_ru.json";
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from "react-router-dom";




class Search extends Component{

	constructor(props){
		super(props);

		this.state = {
			textSearch: ''
		}

		this.IputText = React.createRef();
		this.ReasoultSrch = React.createRef();
		this.search = this.search.bind(this);
		this.arrResoult = '';

		this.closeSearch = this.closeSearch.bind(this);
		this.closeDropT = this.closeDropT.bind(this);


	}

	search(e){
		
		
		if(e.keyCode==13){
			e.preventDefault();
		}

		this.setState({textSearch: e.target.value});


	}

	srchFunc(text){
		let arrRes = [];
		if(text.length>4){
		for(var key in search_ru){
			if(search_ru[key].length>0){
				search_ru[key].forEach(item=>{
					for(var k in item){
						if(item[k].toLowerCase().indexOf(text.toLowerCase()) + 1) {
							let res = {
								path: key,
								value: item
							};
							arrRes.push(res);
						}
					}
				})
			}
			
			}
			if(arrRes.length>0){
				this.arrResoult = this.listReasoult(arrRes);
			}else{
				this.arrResoult = '';
			}
		}else{
			this.arrResoult = '';
		}
	}

	listReasoult(arr){

		var object = {

			'/': <FormattedHTMLMessage id="header.Link1" />,
			'about': <FormattedHTMLMessage id="header.Link4" />,
			'contacts': <FormattedHTMLMessage id="header.Link5" />,
			'reviews': <FormattedHTMLMessage id="header.Link3" />,
			'product': <FormattedHTMLMessage id="header.Link2" />

		}

		return arr.map(item=>{
			let path = item.path;
			
			for(var key in item.value){
				
				return <li key={key}><Link to={'/'+path} 
				onClick={this.closeDropT}>
				<div className="row justify-content-between">
				<p>{item.value[key]}</p>
				<p>{object[path]}</p>
				</div>
				</Link></li>
				
			}
		})
	}

	closeSearch(e){
		
		this.setState({textSearch: ''});
		this.arrResoult = '';
		this.IputText.current.value = '';
		this.props.parentFunc();
	}

	closeDropT(e){

		let screen = document.documentElement.clientWidth;
		
		if(screen<1000){
			this.props.closeDrop();
			
		}
		this.closeSearch();
		
	}


	render(){
		if(this.state.textSearch.length>0){
			this.srchFunc(this.state.textSearch);
		}
		
		let stateSrch = this.props.state=='show'?'show-inp':'hide-inp';
		
		let serachCl = 'container-serch-input position-relative '+stateSrch;

		return(
			<div className={serachCl}>
			<div className={this.arrResoult.length>0?'position-absolute w-100 resoult-search-block bg-lh-grey':'d-none'}
			ref={this.ReasoultSrch}>
			<div className="container-resoult">
			<ul>
			{this.arrResoult}
			</ul>
			</div>
			</div>
			
			<input type="text" className="form-control" placeholder="Text" ref={this.IputText} onKeyDown={this.search}  />
			<div className="container-close position-absolute">
      		<span className="search-btn d-block" onClick={this.closeSearch}><FontAwesomeIcon icon={faTimes} id="close-search"/></span>
      		</div>
			</div>
			
		)
	}
}



export default Search;

