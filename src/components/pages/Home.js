import React, {Component} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from "react-router-dom";
import './css/Home.css';
import ReviewsForm from '../wigets/ReviewsForm';
import ScreenWidth from '../wigets/ScreenWidth';
import GetLanguage from '../wigets/GetLanguage';


var lngauge = GetLanguage('language')==null?'ru':GetLanguage('language');

function Home(){
	return(
		<div className='main-wrapper-content position-relative'>
		<TopBanner />
		<ActiveCalciumBlock />
		<ListDescript />
		<ReviewsForm classValue="bg-lh-grey"/>
		</div>

	)
}


class TopBanner extends Component{
	
render(){

let background = ScreenWidth({desk: './image/img-desk/Banners/3.jpg',
		mobile: './image/img-mobile/Banners-mobile/3.jpg'});



	return(
		<section className="position-relative" style={{backgroundImage: "url(" + background + ")", backgroundPosition: '50% 0%',
		backgroundSize: 'cover'}}>
		<div className="main-block-home container">
			
			<div className="block-content-banner position-relative">
			<div className="cont-title position-relative">
			<div className="title-blck-ban top-title position-absolute text-white"><FormattedHTMLMessage id="site.title1"/></div>
			</div>
			<div className="cont-title position-relative">
			<div className="title-blck-ban mid-title position-absolute text-white"><FormattedHTMLMessage id="site.title2"/></div>
			</div>
			<div className="cont-title position-relative">
			<div className="title-blck-ban bot-title position-absolute"><FormattedHTMLMessage id="site.title3"/></div>
			</div>
			
			</div>
		</div>
		</section>
	)
}
}



function ActiveCalciumBlock(){
	return(
	<section className="container" style={{padding:' 50px 5px'}}>
	
	<div className="block-links-active-calc">
	<div className="block-wrap-links row justify-content-between">

	<Link to="/about" className="col-md-6">
	<div className="wrap-link-company position-relative">
	<picture>
       <source srcSet="./image/img-mobile/Banners-mobile/18424.jpg"  
        media="(max-width: 600px)" className="img-cover w-100 h-100" />
       <img src="./image/img-desk/Banners/18424.jpg" alt="" className="img-cover w-100 h-100" />
    </picture>
    <span className={lngauge==='ru'?'title-link d-block position-absolute text-white font-weight-bold':'title-link d-block position-absolute text-white font-weight-bold tl-uz'}><FormattedHTMLMessage id="home.link1"/></span>
	</div>
	</Link>

	<Link to="/product" className="col-md-6">
	<div className="wrap-link-product position-relative">
	<picture>
       <source srcSet="./image/img-mobile/Banners-mobile/55.jpg"  
        media="(max-width: 600px)" className="img-cover w-100 h-100" />
       <img src="./image/img-desk/Banners/55.jpg" alt="" className="img-cover w-100 h-100" />
    </picture>
    <span className={lngauge==='ru'?'title-link d-block position-absolute text-white font-weight-bold':'title-link d-block position-absolute text-white font-weight-bold tl-uz'}>
    <FormattedHTMLMessage id="home.link2"/></span>
	</div>
	</Link>
	</div>
	</div>

	<div className="descript-product row position-relative pt-60">
	<div className="product-picter-block col-md-4">
	<div className="product-pic">
	<picture>
       <source srcSet="./image/img-mobile/Products-mobile/1.2.png"  
        media="(max-width: 600px)" className="img-cover w-100 h-100" />
       <img src="./image/img-desk/Products/1.2.png" alt="" className="img-cover w-100 h-100" />
    </picture>
    <div className="site-title-clip position-absolute">
    <div className="cont-title position-relative">
			<div className="title-blck-ban top-title position-absolute text-white"><FormattedHTMLMessage id="site.title1"/></div>
			</div>
			<div className="cont-title position-relative">
			<div className="title-blck-ban mid-title position-absolute text-white"><FormattedHTMLMessage id="site.title2"/></div>
			</div>
    </div>
	</div>
	</div>

	<div className="text-description col-md-8 pt-70">
	<p className="text-left"><FormattedHTMLMessage id="home.text1"/></p>
	<p className="text-left"><FormattedHTMLMessage id="home.text2"/></p>
	</div>
	</div>
	</section>
	)
}

function ListDescript(){


	return(
		<section className="row active-sect" style={{padding: '50px 0px 0px', margin: 0}}>
		<div className="picter-ban-left col-md-6 position-relative" style={{backgroundImage: "url(./image/img-desk/Banners/2.jpg)", backgroundPosition: '50% 0%',
		backgroundSize: 'cover'}}></div>
		<div className="picter-mob">
		<img src="./image/img-mobile/Banners-mobile/2.jpg" alt="" className="w-100 h-100 img-contain" />
		</div>
		<div className="wrap-contain-list col-md-6">
		<div className="wrap-list container">

		<div className="topHead-list row">
		<div className="lft-title-list col-md-6 position-relative">
		<div className="container-title-head">
			<div className="cont-title position-relative">
			<div className="title-blck-list top-title position-absolute text-white 
			text-center font-weight-bold">
			<FormattedHTMLMessage id="home.title1"/></div>
			</div>
			<div className="cont-title position-relative">
			<div className="title-blck-list mid-title position-absolute text-white
			text-center font-weight-bold">
			<FormattedHTMLMessage id="home.title2"/></div>
			</div>
		</div>
		</div>
		<div className="rgt-descript-list col-md-6 pt-60">
		<p style={{fontSize:'0.7rem'}}><FormattedHTMLMessage id="home.text3"/></p>
		</div>
		</div>

		<div className="block-list row pt-40 m-aut">

		<div className="lft-blck-list col-md-6">
		<ul>

		<li className="item-list-prd">
		<div className="title-item-list position-relative">
		<div className="title-blck-list text-white text-center font-weight-bold">
		<FormattedHTMLMessage id="home.titleList1"/>
		</div>
		<div className="icon-pict-title position-absolute">
		<div className="cont-icon-pic m-aut">
       		<img src="./image/img-desk/Icons/1.png" alt="" className="img-contain w-100 h-100" />
		</div>
		</div>
		</div>
		<div className="text-list-descr pt-10">
		<p><FormattedHTMLMessage id="home.text4"/></p>
		</div>
		</li>
		

		<li className="item-list-prd">
		<div className="title-item-list position-relative">
		<div className="title-blck-list text-white text-center font-weight-bold">
		<FormattedHTMLMessage id="home.titleList5"/>
		</div>
		<div className="icon-pict-title position-absolute">
		<div className="cont-icon-pic m-aut">
       		<img src="./image/img-desk/Icons/5.png" alt="" className="img-contain w-100 h-100" />
		</div>
		</div>
		</div>
		<div className="text-list-descr pt-10">
		<p><FormattedHTMLMessage id="home.text6"/></p>
		</div>
		</li>


		<li className="item-list-prd">
		<div className="title-item-list position-relative">
		<div className="title-blck-list text-white text-center font-weight-bold">
		<FormattedHTMLMessage id="home.titleList3"/>
		</div>
		<div className="icon-pict-title position-absolute">
		<div className="cont-icon-pic m-aut">
       		<img src="./image/img-desk/Icons/3.png" alt="" className="img-contain w-100 h-100" />
		</div>
		</div>
		</div>
		<div className="text-list-descr pt-10">
		<p><FormattedHTMLMessage id="home.text5"/></p>
		</div>
		</li>

		

		</ul>
		</div>

		<div className="rgt-blck-list col-md-6">
		<ul>

		<li className="item-list-prd">
		<div className="title-item-list position-relative">
		<div className="title-blck-list text-white text-center font-weight-bold">
		<FormattedHTMLMessage id="home.titleList2"/>
		</div>
		<div className="icon-pict-title position-absolute">
		<div className="cont-icon-pic m-aut">
       		<img src="./image/img-desk/Icons/2.png" alt="" className="img-contain w-100 h-100" />
		</div>
		</div>
		</div>
		<div className="text-list-descr pt-10">
		<p><FormattedHTMLMessage id="home.text7"/></p>
		</div>
		</li>
		

		<li className="item-list-prd">
		<div className="title-item-list position-relative">
		<div className="title-blck-list text-white text-center font-weight-bold">
		<FormattedHTMLMessage id="home.titleList6"/>
		</div>
		<div className="icon-pict-title position-absolute">
		<div className="cont-icon-pic m-aut">
       		<img src="./image/img-desk/Icons/6.png" alt="" className="img-contain w-100 h-100" />
		</div>
		</div>
		</div>
		<div className="text-list-descr pt-10">
		<p><FormattedHTMLMessage id="home.text9"/></p>
		</div>
		</li>


		<li className="item-list-prd">
		<div className="title-item-list position-relative">
		<div className="title-blck-list text-white text-center font-weight-bold">
		<FormattedHTMLMessage id="home.titleList4"/>
		</div>
		<div className="icon-pict-title position-absolute">
		<div className="cont-icon-pic m-aut">
       		<img src="./image/img-desk/Icons/4.png" alt="" className="img-contain w-100 h-100" />
		</div>
		</div>
		</div>
		<div className="text-list-descr pt-10">
		<p><FormattedHTMLMessage id="home.text8"/></p>
		</div>
		</li>

		

		</ul>
		</div>

		<div className="rgt-blck-list col-md-6">
		</div>
		</div>
		</div>
		</div>
		</section>
	)
}



export default Home;