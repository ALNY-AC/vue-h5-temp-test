import Vue from 'vue';

import './directive.js';
import './filter.js';
import './url.js';

import Http from './Http.js';

import './components.js';
import './Origin.js';


import Vant from 'vant';
import 'vant/lib/index.css';
import '@/styles/vant.scss';

import '@/styles/styles.scss';

Vue.use(Vant);
Vue.prototype.$http = Http;



