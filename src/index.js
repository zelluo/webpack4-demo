/*index.js */

import './css/style.css'; //导入css
import './css/blue.scss'; // 导入scss

// const hello = require('./hello.js');
// document.querySelector("#root").appendChild(hello());


import React from 'react';
import { render } from 'react-dom';
import Hello from './hello'; // 可省略.js后缀名

render( < Hello / > , document.getElementById('root'));