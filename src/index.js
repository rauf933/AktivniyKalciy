import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mediascreen.css';
import App from './App';

import GetLanguage from './components/wigets/GetLanguage';
import {IntlProvider} from "react-intl";
import messages_ru from "./translation/ru.json";
import messages_uz from "./translation/uz.json";

const messages = {
    'ru': messages_ru,
    'uz': messages_uz
};

	
var language = GetLanguage('language');
if(language==null){
	language = 'ru';
}

ReactDOM.render(<IntlProvider locale={language} messages={messages[language]}><App /></IntlProvider>, 
	document.getElementById('root'));



	





