import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import './css/About.css';
import ScreenWidth from '../wigets/ScreenWidth';
import GetLanguage from '../wigets/GetLanguage';

var lngauge = GetLanguage('language')==null?'ru':GetLanguage('language');

function About(){
	return(
		<div className='main-wrapper-content position-relative'>
		<TopBanner />
		<ListBlocks />
		<OurPartner />
		</div>
	)
}

function TopBanner(){

	let background = ScreenWidth({desk: './image/img-desk/Banners/6.jpg',
		mobile: './image/img-mobile/Banners-mobile/6.jpg'});

	return(
		<section className="position-relative" style={{backgroundImage: "url(" + background + ")", backgroundPosition: '50% 50%',
		backgroundSize: 'cover', padding: '140px 5px'}}>
		
		<div className="main-block-about container">
			
			<div className="block-content-banner position-relative row">
			<div className="col-md-5">
			<div className="cont-title position-relative">
			<div className="title-blck-ban top-title position-absolute text-white">Active</div>
			</div>
			<div className="cont-title position-relative">
			<div className="title-blck-ban mid-title position-absolute text-white">Asia Gold</div>
			</div>
			</div>
			<div className="text-ban-right col-md-7">
			
			</div>
			</div>
		</div>
		</section>
	)
}


function ListBlocks(){
	return(
		<section className="container" style={{padding: '80px 0px'}}>
		<div className="text-ban-right m-aut text-center">
			<p><FormattedHTMLMessage id="about.text1"/></p>
			<p><FormattedHTMLMessage id="about.text2"/></p>
			<p><FormattedHTMLMessage id="about.text3"/></p>
			</div>
		<div className="wrap-list-items row m-aut justify-content-between" style={{paddingTop: '80px'}}>
		
		<div className="item-list-container item-num-1 col-md-4">
		<div className="picter-icon-it position-relative">
		<div className="container-picter">
		<img src="./image/img-mobile/Banners-mobile/l3.jpg" className="w-100 h-100 img-cover" alt="" />
		</div>
		<div className="title-item-about"><FormattedHTMLMessage id="about.title1"/></div>
		</div>
		<div className="text-item-about">
		<p><FormattedHTMLMessage id="about.text4"/></p>
		</div>
		</div>

		<div className="item-list-container item-num-2 col-md-4">
		<div className="picter-icon-it position-relative">
		<div className="container-picter">
		<img src="./image/img-mobile/Banners-mobile/l1.jpg" className="w-100 h-100 img-cover" alt=""/>
		</div>
		<div className="title-item-about"><FormattedHTMLMessage id="about.title2"/></div>
		</div>
		<div className="text-item-about">
		<p><FormattedHTMLMessage id="about.text5"/></p>
		</div>
		</div>

		<div className="item-list-container item-num-3 col-md-4">
		<div className="picter-icon-it position-relative">
		<div className="container-picter">
		<img src="./image/img-mobile/Banners-mobile/l2.jpg" className="w-100 h-100 img-cover" alt=""/>
		</div>
		<div className="title-item-about"><FormattedHTMLMessage id="about.title3"/></div>
		</div>
		<div className="text-item-about">
		<p><FormattedHTMLMessage id="about.text6"/></p>
		</div>
		</div>

		</div>
		</section>
	)
}


function OurPartner(){
	return(
		<section className="bg-lh-grey partner-section" style={{padding: '50px 0px'}}>
			<div className="container">
			<div className="title-clip-partner">
			<div className="container-title-about position-relative">
			<div className={lngauge==='ru'?'title-item-about top-ttl position-relative':'title-item-about title-item-about-uz top-ttl position-relative'}><FormattedHTMLMessage id="about.title4"/></div>
			<div className={lngauge==='ru'?'title-item-about mid-ttl position-absolute':'title-item-about title-item-about-uz mid-ttl position-absolute'}><FormattedHTMLMessage id="about.title5"/></div>
			</div>
			</div>

			<div className="list-item-logo pt-70">
			<div className="container-list-logo row justify-content-start">

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/12.png"  alt=""/>
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/13.png" alt="" />
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/14.png"  alt=""/>
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/15.png"  alt=""/>
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/16.png"  alt=""/>
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/17.png"  alt=""/>
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/18.png"  alt=""/>
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/19.png"  alt=""/>
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/111.png"  alt=""/>
			</div>
			</div>

			<div className="icon-logo col-md-3">
			<div className="container-icon-logo">
			<img src="./image/img-desk/Icons/222.png"  alt=""/>
			</div>
			</div>

			</div>
			</div>

			<a href="#" className="text-white text-center"><div className="btn-blue-link m-aut mt-50" style={{width: '320px'}}><FormattedHTMLMessage id="about.button1"/></div></a>
			</div>
		</section>
	)
}

export default About;