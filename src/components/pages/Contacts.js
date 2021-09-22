import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import GoogleMap from '../wigets/GoogleMap';
import './css/Contact.css';

function Contacts(){
	return(
		<div className='main-wrapper-content position-relative'>
		<ContactBlock />
		</div>
		)
}

function ContactBlock(){
	return(
		<section className="position-relative container" style={{padding: '50px 5px'}}>
		<div className="title-clip-contact position-relative">
			<div className="container-title-reviews position-relative">
				<div className="title-item-reviews top-ttl position-relative">Active</div>
				<div className="title-item-reviews mid-ttl position-absolute">Asia Gold</div>
			</div>
		</div>
		<div className="contact-block row pt-80">
		<div className="info-our-address col-md-6">
		<ul className="col-md-10">

		<li className="row flex-nowrap">
		<div className="icon-picter-item">
		<img src="./image/img-desk/Icons/s4.png" className="w-100 h-100 img-contain" alt="icon" />
		</div>
		<div className="text-address-block"><FormattedHTMLMessage id="footer.address1" /></div>
		</li>

		<li className="row flex-nowrap">
		<div className="icon-picter-item">
		<img src="./image/img-desk/Icons/s4.png" className="w-100 h-100 img-contain" alt="icon" />
		</div>
		<div className="text-address-block"><FormattedHTMLMessage id="footer.address2" /></div>
		</li>

		<li>
		
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/20.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="text-name-address font-weight-bold">
				<FormattedHTMLMessage id="contact.name1" />
			</p>
		</div>
		<p className="text-dolj-address" style={{paddingLeft:'5px'}}><FormattedHTMLMessage 
		id="contact.dolj1"/></p>
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/s1.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="">
				<FormattedHTMLMessage id="contact.phone1" />
			</p>
		</div>
		
		</li>

		<li>
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/20.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="text-name-address font-weight-bold">
				<FormattedHTMLMessage id="contact.name2" />
			</p>
		</div>
		<p className="text-dolj-address" style={{paddingLeft:'5px'}}><FormattedHTMLMessage 
		id="contact.dolj2" /></p>
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/s1.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="">
				<FormattedHTMLMessage id="contact.phone2" />
			</p>
		</div>
		</li>

		<li>
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/20.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="text-name-address font-weight-bold">
				<FormattedHTMLMessage id="contact.name3" />
			</p>
		</div>
		<p className="text-dolj-address" style={{paddingLeft:'5px'}}><FormattedHTMLMessage 
		id="contact.dolj3" /></p>
		<div className="contain-name-addres row">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/s1.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="">
				<FormattedHTMLMessage id="contact.phone3" />
			</p>
		</div>
		</li>

		<li>
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/20.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="text-name-address font-weight-bold">
				<FormattedHTMLMessage id="contact.name4" />
			</p>
		</div>
		<p className="text-dolj-address" style={{paddingLeft:'5px'}}><FormattedHTMLMessage 
		id="contact.address4" /></p>
		<div className="contain-name-addres row">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/s1.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="">
				<FormattedHTMLMessage id="contact.site4" />
			</p>
		</div>
		</li>

		<li>
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/20.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="text-name-address font-weight-bold">
				<FormattedHTMLMessage id="contact.name5" />
			</p>
		</div>
		<p className="text-dolj-address" style={{paddingLeft:'5px'}}><FormattedHTMLMessage 
		id="contact.address5" /></p>
		<div className="contain-name-addres row">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/s1.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="">
				<FormattedHTMLMessage id="contact.phone5" />
			</p>
		</div>
		</li>

		<li>
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/20.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="text-name-address font-weight-bold">
				<FormattedHTMLMessage id="contact.name6" />
			</p>
		</div>
		<p className="text-dolj-address" style={{paddingLeft:'5px'}}><FormattedHTMLMessage 
		id="contact.address6" /></p>
		<div className="contain-name-addres row">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/s1.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="">
				<FormattedHTMLMessage id="contact.phone6" />
			</p>
		</div>
		</li>

		<li>
		<div className="contain-name-addres row flex-nowrap">
			<div className="icon-picter-item"><img src="./image/img-desk/Icons/s5.png" 
			className="w-100 h-100 img-contain" alt="icon"/></div>
			<p className="">
				<FormattedHTMLMessage id="footer.email" />
			</p>
		</div>
		
		</li>
		</ul>
		</div>
		<div className="google-map-contain col-md-6">
		<GoogleMap />
		</div>
		</div>
		</section>
	)
}



export default Contacts;