import React, {Component} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import './css/Reviews.css';
import { Carousel, Modal } from 'react-bootstrap';
import ReviewsForm from '../wigets/ReviewsForm';
import ScreenWidth from '../wigets/ScreenWidth';

import axios from 'axios';
import GetLanguage from '../wigets/GetLanguage';

var lngauge = GetLanguage('language')==null?'ru':GetLanguage('language');

const instance = axios.create({
baseURL: 'http://aktivniykalciy.uz/api'
});

instance.defaults.headers.common['Authorization'] = 'Bearer i25QFdsGaIeemAggsoQ17UZNZewGDAnK';



function Reviews(){
	return(
		<div className='main-wrapper-content position-relative'>
		<TopBanner />
		<ReviewsBlock />
		<Sertificate />
		<ReviewsForm classValue="bg-lh-grey"/>
		</div>
		)
}



function TopBanner(){

	let background = ScreenWidth({desk: './image/img-desk/Banners/4.jpg',
		mobile: './image/img-mobile/Banners-mobile/4.jpg'});

	return(
		<section className="position-relative" style={{padding: '155px 5px', backgroundImage: "url(" + background + ")", backgroundPosition: '50% 40%',
		backgroundSize: 'cover'}}>
		<div className="main-block-reviews container">
			
			<div className="block-content-banner position-relative">
			<div className="cont-title position-relative">
			<div className={lngauge==='ru'?'title-blck-ban top-title position-absolute text-white':'title-blck-ban top-title top-title-uz position-absolute text-white'}><FormattedHTMLMessage id="reviews.title1"/></div>
			</div>
			<div className="cont-title position-relative">
			<div className={lngauge==='ru'?'title-blck-ban mid-title position-absolute text-white':'title-blck-ban mid-title mid-title-uz position-absolute text-white'}><FormattedHTMLMessage id="reviews.title2"/></div>
			</div>
			</div>
		</div>
		</section>
	)
}

class ReviewsBlock extends Component{

	constructor(props){
		super(props);


		this.state = {
			show: false,
			close: this.close.bind(this),
			current: '',
			isFetching: true,
			data: null
		}
		this.name = '';
		this.subText = '';
		this.fullText = '';


		this.handleClick = this.handleClick.bind(this);
		
		
		
	}

	close(e){
		this.setState({show: !this.state.show})
	}

	handleClick(e){
		let idElem = e.target.getAttribute('data-id');
		var self = this;
		this.state.data.forEach(item=>{
			if(item.id==idElem){
				this.name = item.name;
				
				this.fullText = item.text;
			}
		})

		this.setState({show: true});

		
	}


	renderReviews(){

		let arr = [];
		var self = this;
		this.state.data.forEach(item=>{
			if(item.status=='active'){
				arr.push(item);
			}
		})

		
		this.renderContent = arr.map(item=>(
				<Carousel.Item id={item.id} key={item.id}>
   			<div className="title-reviews-item m-aut justify-content-center">
   			<div className="icon-user"><img src="./image/img-desk/Icons/20.png" 
   			className="w-100 h-100 img-contain" /></div>
   			<h3 className="text-center">{item.name}</h3>
   			</div>
   			
   			<div className="text-reviews">
   			<p className="text-center">{this.reviewsElips(item.text)}</p>
   			</div>
   			<div className={item.text.length>500?'btn-more-read visible':'btn-more-read'} 
   			onClick={this.handleClick} data-id={item.id}>Читать <span> >> </span></div>
  		</Carousel.Item>
			))

			

		
	}

	

	reviewsElips(item){
		var wordArray = item.split(" ");
		var a = [];
		let screenS = document.documentElement.clientWidth;
		let num = screenS<500?70:105;

   		for(var i=0; i<num; i++){
    		a.push(wordArray[i]);
    	}
		
        a.pop();
        return a.join(" ") + ("...");
    	
	}

	componentDidMount(){

		var self = this;

        axios.get(instance.defaults.baseURL+'/comments', {
    	headers: instance.defaults.headers.common})
  		.then(function (response) {
  			
    		self.setState({data: response.data, isFetching:false});
    
  		})
  		.catch(function (error) {
    		console.log(error);
  		})

  		if(!this.state.isFetching){
			this.shortText();
		}
		
	}

	
	shortText(){
		var items = document.getElementsByClassName('text-reviews');
		
		for(var k=0; k<items.length; k++){

			var text = items[k].innerText;
			
			if(text.length>500){
				this.reviewsElips(items[k]);
				var idEl = items[k].parentElement;
				idEl.getElementsByClassName('btn-more-read')[0].classList.add('visible');
				
			}

		}
	}

	render(){
	if(!this.state.isFetching){
		this.renderReviews();
		
	}
	return(
		<section className="bg-lh-grey" style={{padding: '60px 5px'}}>
		<div className="container">
		<div className="title-reviews position-relative">
			<div className="container-title-reviews position-relative">
				<div className={lngauge==='ru'?'title-item-reviews top-ttl position-relative':'title-item-reviews top-ttl top-ttl-rev-uz position-relative'}><FormattedHTMLMessage id="reviews.title3"/></div>
				<div className={lngauge==='ru'?'title-item-reviews mid-ttl position-absolute':'title-item-reviews mid-ttl mid-ttl-rev-uz position-absolute'}><FormattedHTMLMessage id="reviews.title4"/></div>
			</div>
		</div>

		<div className="block-reviews-list pt-90">
		<Carousel className="col-md-9 m-aut" touch={true}>
  			{this.renderContent}
		</Carousel>
<Modal
        size="400px"
        show={this.state.show}
        onHide = {this.state.close}
      
        
        aria-labelledby="example-modal-sizes-title-lg">

        <Modal.Header closeButton>
        <div className="title-reviews-md">
         <h4>{this.name}</h4>
         <p>{this.subText}</p>
         </div>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-window-certificate">
			<div className="modal-text-review">
				{this.fullText}
			</div>
        </div>
        </Modal.Body>
      </Modal>	
		</div>
		</div>
		</section>
	)
}
}


class Sertificate extends Component{

	constructor(props){
		super(props);

		this.state ={
			close: this.close.bind(this),
			show: false, 
			size: '300px'
		}

		this.imgModal = null;

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		let numImg = e.target.getAttribute('data-img');
		this.imgModal = './image/img-desk/Certificates/'+numImg+'.jpg';
		this.setState({show: !this.state.show});
	}

	close(e){
		this.setState({show: !this.state.show});
	}

	render(){
	return(
		<section className="" style={{padding:'50px 5px'}}>
		<div className="container">
		<div className="title-sertificate position-relative">
			<div className="container-title-sertificate position-relative">
				<div className={lngauge==='ru'?'title-item-sertificate top-ttl position-relative':'title-item-sertificate top-ttl top-ttl-rev-uz position-relative'}><FormattedHTMLMessage id="reviews.title5"/></div>
				<div className={lngauge==='ru'?'title-item-sertificate mid-ttl position-absolute':'title-item-sertificate mid-ttl mid-ttl-rev-uz position-absolute'}><FormattedHTMLMessage id="reviews.title6"/></div>
			</div>
		</div>

		<div className="list-sertificate row pt-90">
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/1.jpg"  data-img="1" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/2.jpg"  data-img="2" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/3.jpg"  data-img="3" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/4.jpg"  data-img="4" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/5.jpg"  data-img="5" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/6.jpg"  data-img="6" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/7.jpg"  data-img="7" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/8.jpg"  data-img="8" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/9.jpg"  data-img="9" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/10.jpg"  data-img="10" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/11.jpg"  data-img="11" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/12.jpg" data-img="12" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/13.jpg" data-img="13" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/14.jpg" data-img="14" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/15.jpg" data-img="15" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/16.jpg" data-img="16" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/17.jpg" data-img="17" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/18.jpg" data-img="18" className="w-100 h-100 img-cover" />
		</div>
		<div className="img-sertificate col-md-3" onClick={this.handleClick}>
		<img src="./image/img-mobile/Certificate-mobile/19.jpg" data-img="19" className="w-100 h-100 img-cover" />
		</div>

		</div>

		<Modal
        size="300px"
        show={this.state.show}
        onHide={this.state.close}
        
        aria-labelledby="example-modal-sizes-title-lg">

        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
        <div className="modal-window-certificate">
        <img src={this.imgModal} className="w-100 h-100 img-cover" />
        </div>
        </Modal.Body>
      </Modal>
		</div>
		</section>
	)
	}
}

export default Reviews;