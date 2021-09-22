import React, {Component} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {  
  NavLink
} from "react-router-dom";

import { Modal } from 'react-bootstrap';



class Footer extends Component{

	constructor(props){

		super(props);

		this.state = {
			show: false,
			close: this.close.bind(this),
			current: ''
		}

		this.content = '';
		this.titleCont = '';

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(e){
		let idEl = e.target.parentElement.getAttribute('id');
		this.titleCont = e.target.innerText;
		this.setState({show: !this.state.show});
		if(idEl){
			this.content = this.switchElements(idEl);

		}

	}

	scrollTop(){
		window.scrollTo(0, 0);
	}

	close(e){
		this.setState({show: !this.state.show})
	}

	switchElements(el){
		switch(el){
			case 'instruction':
			return <Instruction />;

			case 'sostav':
			return <Sostav />;

			case 'pokazaniya':
			return <Pokazaniya />;

			case 'hranenie':
			return <Hranenie />;

			
		}
	}

	render(){

		return(
			<footer className="bg-dark">
			<div className="footer-block-cont container">
				<div className="enter-foot row">
					<div className="col-md-5 rgt-foot-blck">
						<div className="logo-site-foot">
							<div className="cont-pic-logo">
							<picture>
                            <source srcSet="./image/img-mobile/Icons-mobile/logo-white.png"  
                            media="(max-width: 600px)" className="img-cover" />
                            <img src="./image/img-desk/Icons/logo-white.png" alt="" className="img-cover" />
                        	</picture>
                        	</div>
						</div>
						<div className="block-info-address">
						<div className="item-address location-item row flex-nowrap">
						<span className="d-block">
						<img src='./image/img-desk/Icons/21.png' alt=""/></span>
						<p className="text-white col-md-10">
						<FormattedHTMLMessage id="footer.address1"/>
						</p>
						</div>
						<div className="item-address location2-item row flex-nowrap">
						<span className="d-block">
						<img src='./image/img-desk/Icons/22.png' alt=""/></span>
						<p className="text-white col-md-10">
						<FormattedHTMLMessage id="footer.address2"/>
						</p>
						</div>
						<div className="item-address phone-item row flex-nowrap">
						<span className="d-block">
						<img src='./image/img-desk/Icons/23.png' alt=""/></span>
						<p className="text-white col-md-10">
						<FormattedHTMLMessage id="footer.phone"/>
						</p>
						</div>
						<div className="item-address mail-item row flex-nowrap">
						<span className="d-block">
						<img src='./image/img-desk/Icons/24.png' alt=""/></span>
						<p className="text-white col-md-10">
						<FormattedHTMLMessage id="footer.email"/>
						</p>
						</div>
						</div>
					</div>
	<div className="col-md-3 mid-foot-blck pt-90">
		<div className="list-links-site">
		<ul>
            <li onClick={this.scrollTop}>
              <NavLink exact to="/" activeStyle={{color:'#00b9fd'}}><FormattedHTMLMessage id="header.Link1"/></NavLink>
            </li>
            <li onClick={this.scrollTop}>
              <NavLink to="/product" activeStyle={{color:'#00b9fd'}}><FormattedHTMLMessage id="header.Link2"/></NavLink>
            </li>
            <li onClick={this.scrollTop}>
              <NavLink to="/reviews" activeStyle={{color:'#00b9fd'}}><FormattedHTMLMessage id="header.Link3"/></NavLink>
            </li>
            <li onClick={this.scrollTop}>
              <NavLink to="/about" activeStyle={{color:'#00b9fd'}}><FormattedHTMLMessage id="header.Link4"/></NavLink>
            </li>
            <li onClick={this.scrollTop}>
              <NavLink to="/contacts" activeStyle={{color:'#00b9fd'}}><FormattedHTMLMessage id="header.Link5"/></NavLink>
            </li>
          </ul>	
          </div>
          <div className="list-links-instruction">
          <ul>
            <li onClick={this.handleClick}>
              <span id="instruction"><FormattedHTMLMessage id="footer.link1"/></span>
            </li>
            <li onClick={this.handleClick}>
              <span id="sostav"><FormattedHTMLMessage id="footer.link2"/></span>
            </li>
            <li onClick={this.handleClick}>
              <span id="pokazaniya"><FormattedHTMLMessage id="footer.link3"/></span>
            </li>
            <li onClick={this.handleClick}>
              <span id="hranenie"><FormattedHTMLMessage id="footer.link4"/></span>
            </li>
          
          </ul>	
          </div>

          <Modal
        size="500px"
        show={this.state.show}
        onHide = {this.state.close}
      
        
        aria-labelledby="example-modal-sizes-title-lg">

        <Modal.Header closeButton>
         <h3>{this.titleCont}</h3>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-window-certificate">
			<div className="block-modal-text">
				{this.content}
			</div>
        </div>
        </Modal.Body>
      </Modal>	
	</div>
	<div className="col-md-4 lft-foot-blck">
		<div className="social-icon-block mt-80">
		<div className="social-icon-links row justify-content-center flex-nowrap">
		<div className="item-soc-icon col-md-3">
		<a href="https://www.facebook.com/aktivniykalciy.uz/" target="_blank" rel="noopener noreferrer">
		<div className="icon-social  m-aut">
		<img src="./image/img-desk/Icons/9.png" alt=""/>
		</div>
		</a>
		</div>
		<div className="item-soc-icon col-md-3">
		<a href="https://instagram.com/aag_kalciy?igshid=1044ejiu9fd3s" target="_blank" rel="noopener noreferrer">
		<div className="icon-social m-aut">
		<img src="./image/img-desk/Icons/10.png" alt=""/>
		</div>
		</a>
		</div>
		<div className="item-soc-icon col-md-3">
		<a href="https://t.me/saeedxudja" target="_blank" rel="noopener noreferrer">
		<div className="icon-social m-aut">
		<img src="./image/img-desk/Icons/11.png" alt=""/>
		</div>
		</a>
		</div>
		</div>
		</div>

		<div className="links-download mt-40">
			<div className="item-download text-center m-aut">
				<a href="#"><FormattedHTMLMessage id="footer.button1"/></a>
			</div>
			<div className="item-download text-center m-aut mt-10">
				<a href="#" style={{padding:0}}><FormattedHTMLMessage id="footer.button2"/></a>
			</div>
		</div>
	</div>
	</div>
	</div>
	</footer>
		)
	}
}

function Pokazaniya(){
	return(
		<div className="block-instruction-modal">
		<p className="font-weight-bold"><FormattedHTMLMessage id="modal.text1-title1"/></p>
		<ul>
		<li><FormattedHTMLMessage id="modal.text1-list1"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list2"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list3"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list4"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list5"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list6"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list7"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list8"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list9"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list10"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list11"/></li>
		<li><FormattedHTMLMessage id="modal.text1-list12"/></li>
		</ul>
		<p className="font-weight-bold"><FormattedHTMLMessage id="modal.text1-title2"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text1-text2"/></p>
		<p className="font-weight-bold"><FormattedHTMLMessage id="modal.text1-title3"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text1-text3"/></p>
		
		</div>
	)
}


function Instruction(){
	return(
		<div className="block-sostav-modal">
		
		<p className="text-modal font-weight-bold"><FormattedHTMLMessage id="modal.text2-text1"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text2-text2"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text2-text3"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text2-text4"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text2-text5"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text2-text6"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text2-text7"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text2-text8"/></p>		
		</div>
	)
}

function Sostav(){
	return(
		<div className="block-pokazaniya-modal">
		<p className="text-modal"><FormattedHTMLMessage id="modal.text3-text1"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text3-text2"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text3-text3"/></p>
		<p className="text-modal"><FormattedHTMLMessage id="modal.text3-text4"/></p>
		</div>
	)
}

function Hranenie(){
	return(
		<div className="block-hranenie-modal">
		<p className="text-modal"><FormattedHTMLMessage id="modal.text4-text1"/></p>
		</div>
	)
}

export default Footer;