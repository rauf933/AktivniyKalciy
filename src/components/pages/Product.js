import React, {Component} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import { Modal } from 'react-bootstrap';

import './css/Product.css';
import ReviewsForm from '../wigets/ReviewsForm';
import ScreenWidth from '../wigets/ScreenWidth';
import axios from 'axios';
import GetLanguage from '../wigets/GetLanguage';

var lngauge = GetLanguage('language')==null?'ru':GetLanguage('language');

const instance = axios.create({
baseURL: 'http://aktivniykalciy.uz/api'
});

instance.defaults.headers.common['Authorization'] = 'Bearer i25QFdsGaIeemAggsoQ17UZNZewGDAnK';



function Product(){
	return(
		<div className='main-wrapper-content position-relative'>
		<TopBanner />
		<ListProducts />
		<Facts />
		<ReviewsForm classValue="bg-white"/>
		</div>
		)
}



function TopBanner(){

	let background = ScreenWidth({desk: './image/img-desk/Banners/55.jpg',
		mobile: './image/img-mobile/Banners-mobile/55.jpg'});


	return(
		<section className="position-relative" style={{padding:'120px 5px', backgroundImage: "url(" + background + ")",backgroundPosition: '50% 60%',
		backgroundSize: 'cover'}}>
		<div className="main-block-product container">
			
			<div className="block-content-banner position-relative row">
			<div className="col-md-5">
			<div className="cont-title position-relative">
			<div className="title-blck-ban top-title position-absolute text-white">
			<FormattedHTMLMessage id="site.title1"/>
			</div>
			</div>
			<div className="cont-title position-relative">
			<div className="title-blck-ban mid-title position-absolute text-white">
			<FormattedHTMLMessage id="site.title2"/>
			</div>
			</div>
			<div className="cont-title position-relative">
			<div className="title-blck-ban bot-title position-absolute">
			<FormattedHTMLMessage id="product.title2"/>
			</div>
			</div>
			</div>
			</div>
		</div>
		</section>
	)
}



class ListProducts extends Component{
	constructor(props){
		super(props);

		this.state = {
			data: null,
			show:false,
			close: this.close.bind(this),
			content: '',
			isFetching: true,
			error: null
		}
		this.contentRend = '';
	}

	componentDidMount(){
		var self = this;

            axios.get(instance.defaults.baseURL+'/products', {
    headers: instance.defaults.headers.common})
  .then(function (response) {
   
    self.setState({data: response.data, isFetching:false});

   
  })
  .catch(function (error) {
    console.log(error);
  })

  

	}

	close(e){
		this.setState({show: !this.state.show});
	}

	async handleClick(e){
		
		let idEl = e.target.classList.contains('item-cont-product')?e.target:e.target.parentElement.parentElement;
		idEl = idEl.getAttribute('id');
		if(idEl!==null){
		 var dataG = await this.state.data.filter(item=>item.id===Number(idEl));

			this.setState({content: {
				name: dataG[0].name,
				sostav: lngauge==='ru'?dataG[0].description:dataG[0].description_uz
			}, show: true});
			
		}




	}

	contentRender(){
		
		this.contentRend = this.state.data.map((item, index)=>(

			<div className='item-cont-product col-md-4 mt-15' key={item.id} id={item.id} onClick={(e)=>this.handleClick(e)}>
				<div className="container-img-product bg-lh-grey">
				<img src={item.photos.large} className="w-100 h-100 img-contain" />
				</div>
				<div className="name-products bg-white">
				<p>{lngauge==='ru'?item.name:item.name_uz}</p>
				</div>
				
			</div> 
		))

		
		
	}

	render(){

         if(!this.state.isFetching){
         	this.contentRender();
         }
		const { data, isFetching, error } = this.state;
		let loading = <div className="preloader-block w-100">
		<div className="load-wrapp m-aut">
            <div className="load-6">
               
                <div className="letter-holder">
                    <div className="l-1 letter">L</div>
                    <div className="l-2 letter">o</div>
                    <div className="l-3 letter">a</div>
                    <div className="l-4 letter">d</div>
                    <div className="l-5 letter">i</div>
                    <div className="l-6 letter">n</div>
                    <div className="l-7 letter">g</div>
                    <div className="l-8 letter">.</div>
                    <div className="l-9 letter">.</div>
                    <div className="l-10 letter">.</div>
                </div>
            </div>
        </div>
		</div>;

		let content = this.contentRend;
	
		let contain = isFetching?loading:content;


		return(
			<section className="" style={{padding: '50px 5px'}}>
		<div className="container products-list">
		<div className="title-products position-relative">
			<div className="container-title-product position-relative">
				<div className="title-item-product top-ttl position-relative"><FormattedHTMLMessage id="product.title3"/></div>
				<div className="title-item-product mid-ttl position-absolute"><FormattedHTMLMessage id="product.title4"/></div>
			</div>
		</div>

		<div className="block-list-products row justify-content-start pt-80">
			{contain}

			<Modal
        size="350px"
        show={this.state.show}
        onHide = {this.state.close}
      
        
        aria-labelledby="example-modal-sizes-title-lg">

        <Modal.Header closeButton>
         <h5 style={{color: '#12aaf1'}}>{this.state.content.name}</h5>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-window-certificate">
			<div className="block-modal-text">
				{this.state.content.sostav}
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



class Facts extends Component{

	constructor(props){
		super(props);

		this.objImg = {
			'item-bounce': "./image/img-desk/Facts/1.jpg",
			'item-mishc': "./image/img-desk/Facts/2.jpg",
			'item-heart': "./image/img-desk/Facts/3.jpg",
			'item-pishe': "./image/img-desk/Facts/4.jpg",
			'item-mouth': "./image/img-desk/Facts/5.jpg",
			'item-heir': "./image/img-desk/Facts/6.jpg",
			'item-stress': "./image/img-desk/Facts/7.jpg",
			'item-beremen': "./image/img-desk/Facts/8.jpg",
		}

		this.state = {
			currentId: 'item-bounce'
		}

		this.content = this.switchReturn('bounce');
		this.changeState = this.changeState.bind(this);
	}

	changeState(e){
		
		let dataType = e.target.parentElement.getAttribute('data-type');
		let elemId = e.target.parentElement.getAttribute('id');
		let state = e.target.parentElement.getAttribute('data-state');

		if(state=='sleep'){
			let prevEl = document.getElementById(this.state.currentId);
			prevEl.setAttribute('data-state', 'sleep');
			document.getElementById(elemId).setAttribute('data-state', 'active');
			this.content = this.switchReturn(dataType);
			this.setState({currentId: elemId});
		}
		
	}

	switchReturn(el){

		switch(el){
				case 'bounce': 
				return <Bounce />;
				
				case 'mishc': 
				return <Mishc />;
				
				case 'heart': 
				return <Heart />;
				
				case 'pishe': 
				return <Pish />;
				
				case 'mouth': 
				return <Mouth />;
				
				case 'heir': 
				return <Hair />;
				
				case 'stress': 
				return <Stress />;
				
				case 'beremen': 
				return <Beremennost />;
				
			};
	}

	render(){
	let img;
	let classN = 'w-100 h-100 img-cover';

	if(this.state.currentId=='item-bounce'||this.state.currentId=='item-mishc'){
			classN = 'w-100 h-100 img-contain';
		}

	for(var key in this.objImg){
		if(key==this.state.currentId){
			img = this.objImg[key];
		}
	}
		
	return(
		<section className="bg-lh-grey-facts position-relative" style={{padding: '50px 5px'}}>

		<div className="cont-picter-bg position-absolute">
                <img src={img} alt="" className={classN} />
             	
			</div>
			<div className="container">
			<div className="title-clip-fact">
				<div className="container-title-fact position-relative">
					<div className={lngauge==='ru'?'title-item-fact top-ttl position-relative':'title-item-fact top-ttl position-relative item-fact-uz'}><FormattedHTMLMessage id="product.title5"/></div>
					<div className={lngauge==='ru'?'title-item-fact mid-ttl position-absolute':'title-item-fact mid-ttl mid-ttl-uz position-absolute item-fact-uz'}><FormattedHTMLMessage id="product.title6"/></div>
				</div>
			</div>

			<div className="block-items-facts row pt-80">
				<div className="blck-nav-facts col-md-4">
					<ul>
						<li className="text-left" id="item-bounce" key="item-bounce" data-state="active"
						data-type="bounce" onClick={this.changeState}>
              			<FormattedHTMLMessage id="product.factLink1"/>
            			</li>
            			<li className="text-left" id="item-mishc" key="item-mishc" data-state="sleep"
            			data-type="mishc" onClick={this.changeState}>
              			<FormattedHTMLMessage id="product.factLink2"/>
            			</li>
            			<li className="text-left" id="item-heart" key="item-heart" data-state="sleep"
            			data-type="heart" onClick={this.changeState}>
              			<FormattedHTMLMessage id="product.factLink3"/>
            			</li>
            			<li className="text-left" id="item-pishe" key="item-pishe" data-state="sleep"
            			data-type="pishe" onClick={this.changeState}>
              			<FormattedHTMLMessage id="product.factLink4"/>
            			</li>
            			<li className="text-left" id="item-mouth" key="item-mouth" data-state="sleep"
            			data-type="mouth" onClick={this.changeState}>
              			<FormattedHTMLMessage id="product.factLink5"/>
            			</li>
            			<li className="text-left" id="item-heir" key="item-heir" data-state="sleep"
            			data-type="heir" onClick={this.changeState}>
              			<FormattedHTMLMessage id="product.factLink6"/>
            			</li>
            			<li className="text-left" id="item-stress" key="item-stress" data-state="sleep"
            			data-type="stress" onClick={this.changeState}>
              			<FormattedHTMLMessage id="product.factLink7"/>
            			</li>
            			<li className="text-left" id="item-beremen" key="item-beremen" data-state="sleep"
            			data-type="beremen" onClick={this.changeState}>
              			<FormattedHTMLMessage id="product.factLink8"/>
            			</li>
					</ul>
				</div>

				<div className="route-block-facts col-md-8 pt-40">
					{this.content}
				</div>
			</div>
			</div>
		</section>
	)
	}
}

function Bounce(){
	return(
		<div className="container-product-mishc position-relative" style={{marginTop: '20px'}}>
			<div className="text-facts">
			<p><FormattedHTMLMessage id="product.factText1"/></p>
			<p><FormattedHTMLMessage id="product.factText1-2"/></p>
			</div>
		</div>
	)
}

function Beremennost(){
	return(
		<div className="container-product-mishc position-relative" style={{marginTop: '20px'}}>
			<div className="text-facts">
			<p><FormattedHTMLMessage id="product.factText8"/></p>
			<p><FormattedHTMLMessage id="product.factText8-2"/></p>
			</div>
		</div>
	)
}

function Mishc(){
	return(
		<div className="container-product-mishc position-relative" style={{marginTop: '60px'}}>
			<div className="text-facts">
			<p><FormattedHTMLMessage id="product.factText2"/></p>
			</div>
		</div>
	)
}

function Heart(){
	return(
		<div className="container-product-mishc position-relative" style={{marginTop: '70px'}}>
			<div className="text-facts">
			<p><FormattedHTMLMessage id="product.factText3"/></p>
			</div>
		</div>
	)
}

function Pish(){
	return(
		<div className="container-product-mishc position-relative">
			<div className="text-facts">
			<p style={{marginBottom:0}}><FormattedHTMLMessage id="product.factTitleList4"/></p>
			<ul>
			<li><FormattedHTMLMessage id="product.factItemList1"/></li>
			<li><FormattedHTMLMessage id="product.factItemList2"/></li>
			<li><FormattedHTMLMessage id="product.factItemList3"/></li>
			<li><FormattedHTMLMessage id="product.factItemList4"/></li>
			</ul>
			<p><FormattedHTMLMessage id="product.factText4"/></p>
			<p><FormattedHTMLMessage id="product.factText4-2"/></p>
			</div>
		</div>
	)
}

function Mouth(){
	return(
		<div className="container-product-mishc position-relative" style={{marginTop: '50px'}}>
			<div className="text-facts">
			<p><FormattedHTMLMessage id="product.factText5"/></p>
			</div>
		</div>
	)
}

function Hair(){
	return(
		<div className="container-product-mishc position-relative" style={{marginTop: '40px'}}>
			<div className="text-facts">
			<p><FormattedHTMLMessage id="product.factText6"/></p>
			</div>
		</div>
	)
}

function Stress(){
	return(
		<div className="container-product-mishc position-relative" style={{marginTop: '40px'}}>
			<div className="text-facts">
			<p><FormattedHTMLMessage id="product.factText7"/></p>
			</div>
		</div>
	)
}



export default Product;