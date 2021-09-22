import React, {Component} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import './css/Form.css';
import axios from 'axios';
import GetLanguage from '../wigets/GetLanguage';

var lngauge = GetLanguage('language')==null?'ru':GetLanguage('language');

const instance = axios.create({
baseURL: 'http://aktivniykalciy.uz/api'
});

instance.defaults.headers.common['Authorization'] = 'Bearer i25QFdsGaIeemAggsoQ17UZNZewGDAnK';


var objTranslation = {
	name: {
		ru: 'Имя',
		uz: 'Ism'
	},
	text: {
		ru: 'Текст сообщения',
		uz: 'Habar matni'
	}

}
class ReviewsForm extends Component{

	constructor(props){
		super(props);

		this.state={
			name: '',
			email: '',
			text: ''
		}

		this.error = false;
		this.valueChange = this.valueChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		
	}

	valueChange(e){

		let typename = e.target.name;

		this.error = false;
		this.getError();
		if(typename=='name'){
			this.setState({name: e.target.value});
		}else if(typename=='email'){
			this.setState({email: e.target.value});
		}else if(typename=='text'){
			this.setState({text: e.target.value});
		}
		
	}

	submitForm(e){

		var self = this;

		e.preventDefault();

  		const fd = new FormData();
        fd.append('name', this.state.name);
        fd.append('email', this.state.email);
        fd.append('text', this.state.text);

            const xhr = new XMLHttpRequest();
            xhr.open('POST', instance.defaults.baseURL+'/comments/create', true);
            xhr.responseType = 'json';
            xhr.setRequestHeader("Authorization", "Bearer i25QFdsGaIeemAggsoQ17UZNZewGDAnK");
            xhr.onload = function () {
              
                if (xhr.status === 200) {
                	
                	window.location.reload();
                  
                }else if(xhr.status === 422){
                	
                	self.error=true;
                  self.getError(xhr.response);
                }

            };
            xhr.send(fd);
	}

	getError(data=null){
		let field = document.getElementsByTagName('textarea');

		if(this.error){
			data.forEach(item=>{
				
				for(var k=0; k<field.length; k++){
					if(field[k].getAttribute('name')==item.field){
						field[k].classList.add('text-error');
					}
					
				}
			})
		}else{
			for(var l=0; l<field.length; l++){
				field[l].classList.remove('text-error');
			}
			
		}
		return this.error;
	}

	render(){
		let classVal = "sect-form-blck position-relative "+this.props.classValue;
		return(
			<section className={classVal}>

			<div className="container-title-form position-absolute">
			<div className="cont-title position-relative">
			<div className="title-blck-form top-title position-absolute text-white 
			text-center font-weight-bold">
			<FormattedHTMLMessage id="site.title4"/></div>
			</div>
			<div className="cont-title position-relative">
			<div className="title-blck-form mid-title position-absolute text-white
			text-center font-weight-bold">
			<FormattedHTMLMessage id="site.title5"/></div>
			</div>
			</div>

			<div className="container-form container">

			<div className="cont-form col-md-7 m-aut pt-50">
			<form>
			<div className="row justify-content-between" style={{padding: '0px 15px'}}>
			<textarea name="name" rows='1' placeholder={lngauge==='ru'?objTranslation.name.ru:objTranslation.name.uz} onChange={this.valueChange}></textarea>
			<textarea name="email" rows='1' placeholder='E-mail' onChange={this.valueChange}></textarea></div>
			<textarea name= "text" placeholder={lngauge==='ru'?objTranslation.text.ru:objTranslation.text.uz} onChange={this.valueChange}></textarea>
			<button className="m-aut mt-40" onClick={this.submitForm}><FormattedHTMLMessage id="site.button3"/></button>
			</form>
			</div>
			</div>
			</section>
		)
	}
}

export default ReviewsForm;