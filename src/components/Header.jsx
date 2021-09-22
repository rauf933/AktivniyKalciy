import React, {Component } from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {
  NavLink
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import Search from './wigets/Search';
import Language from './wigets/Language';
import BurgerMenu from './wigets/BurgerMenu';
import GetLanguage from './wigets/GetLanguage';

var lngauge = GetLanguage('language')==null?'ru':GetLanguage('language');


 window.addEventListener('scroll', function() {

  let header = document.getElementById('header-site');

  if(window.pageYOffset > 100 && header.classList.contains('scroll-top')){
    
     header.classList.remove('scroll-top');
      header.classList.add('scroll-down', 'header-auto');
  }else if(window.pageYOffset < 50 && header.classList.contains('scroll-down')){
     header.classList.remove('scroll-down', 'header-auto');
      header.classList.add('scroll-top');
  }
  
});




class Header extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      hidden: false,
      stateSrch: false
     
    }
    
    this.headerH = React.createRef();
    this.dropDown = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
   


  }

  

  toggleMenu(e){
    this.setState({hidden: !this.state.hidden});

    if(!this.state.hidden){
      this.headerH.current.classList.remove('scroll-top');
      this.headerH.current.classList.add('header-auto');
      this.dropDown.current.style.display = 'block';
    } else if(this.headerH.current.classList.contains('scroll-down')){
      this.headerH.current.classList.add('header-auto');
      this.dropDown.current.style.display = 'none';
    }else{
      this.headerH.current.classList.add('scroll-top');
      this.headerH.current.classList.remove('header-auto');
      this.dropDown.current.style.display = 'none';
    }


  }

  searchToggle(e){
    this.setState({stateSrch: !this.state.stateSrch});

  }

  scrollTop(){
    window.scrollTo(0, 0);
  }



  render(){
 var lng = GetLanguage('language');
 
  return (
  	
    <div className="nav-header main-nav bg-white scroll-top" ref={this.headerH} id="header-site">
    <div className="container row m-aut enter-block-header 
    justify-content-between position-relative flex-nowrap">
      <div className={lng==='ru'?'site-brand col-md-4 l-height2':'site-brand col-md-3 l-height2'}>
      	<div className="picter-container w-40">
      		<NavLink exact to="/" onClick={this.scrollTop}><picture>
                <source srcSet="./image/img-mobile/Icons-mobile/logo-color.png"  media="(max-width: 600px)" className="img-cover" />
                <img src="./image/img-desk/Icons/logo-color.png" alt="" className="img-cover" />
             </picture></NavLink>
      	</div>
      </div>
      <div className={lng==='ru'?'right-navbar col-md-8 row l-height2 position-relative':'right-navbar col-md-9 row l-height2 position-relative'}>
      <Search state={this.state.stateSrch?'show':'hide'} parentFunc = {this.searchToggle}/>
        <nav className={this.state.stateSrch?'d-none':'col-md-9'}>
          <ul className="row m-aut justify-content-between p-lft0 flex-nowrap pt--5">
            <li>
              <NavLink exact to="/" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop} className={lng==='uz'?'navbar-uz':''}><FormattedHTMLMessage id="header.Link1"/></NavLink>
            </li>
            <li>
              <NavLink to="/product" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop} className={lng==='uz'?'navbar-uz':''}><FormattedHTMLMessage id="header.Link2"/></NavLink>
            </li>
            <li>
              <NavLink to="/reviews" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop} className={lng==='uz'?'navbar-uz':''}><FormattedHTMLMessage id="header.Link3"/></NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop} className={lng==='uz'?'navbar-uz':''}><FormattedHTMLMessage id="header.Link4"/></NavLink>
            </li>
            <li>
              <NavLink to="/contacts" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop} className={lng==='uz'?'navbar-uz':''}><FormattedHTMLMessage id="header.Link5"/></NavLink>
            </li>
          </ul>

        </nav>
        <div className={this.state.stateSrch?'d-none':'users-tools col-md-3 row justify-content-between'}>
			<div className="container-serch col-md-6">
      <span className="search-btn d-block" onClick={this.searchToggle} data-state="open"><FontAwesomeIcon icon={faSearch} /></span>
      </div>
			<Language language={lngauge}/>
        </div>
      </div>

      <div className="col-md-1 wrap-burger" onClick={this.toggleMenu}>
      <BurgerMenu />
      </div>
    </div>
    <div className="block-drop-down burger-menu-drop container" ref={this.dropDown}>
    <nav className="">
          <ul className="pt-20 col-md-6" onClick={this.toggleMenu}>
            <li className="text-left">
              <NavLink exact to="/" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop}><FormattedHTMLMessage id="header.Link1"/></NavLink>
            </li>
            <li className="text-left">
              <NavLink to="/product" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop}><FormattedHTMLMessage id="header.Link2"/></NavLink>
            </li>
            <li className="text-left">
              <NavLink to="/reviews" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop}><FormattedHTMLMessage id="header.Link3"/></NavLink>
            </li>
            <li className="text-left">
              <NavLink to="/about" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop}><FormattedHTMLMessage id="header.Link4"/></NavLink>
            </li>
            <li className="text-left">
              <NavLink to="/contacts" activeStyle={{color:'#3a3939'}} onClick={this.scrollTop}><FormattedHTMLMessage id="header.Link5"/></NavLink>
            </li>
          </ul>
        </nav>
        <div className="users-tools col-md-10 row flex-nowrap">
        <Language language={lngauge}/>
      <div className={this.state.stateSrch?'d-none':'container-serch col-md-2'} >
      <span className="search-btn d-block" onClick={this.searchToggle} data-state="open"><FontAwesomeIcon icon={faSearch} /></span>
      </div>
      <Search state={this.state.stateSrch?'show':'hide'} parentFunc = {this.searchToggle} closeDrop = {this.toggleMenu}/>
        </div>
    </div>
    </div>

    
   
  );
  }
}



export default Header;
