import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

global.jQuery = require('jquery');
require('bootstrap-loader');

//require('font-awesome-webpack-sass');

const json = require('./resume.json');

ReactDOM.render(<App jsonObj={json} />,
  document.getElementById('root'));
registerServiceWorker();
