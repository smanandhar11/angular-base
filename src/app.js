//external dependencies
import 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';


//internal dependencies
import appConfig from './app.config'
import './index.html';
import './style.scss';




angular.module('app', [
    ngMaterial,
    ngAnimate,
    uiRouter
])
    .config(appConfig);


angular.bootstrap(document,['app']);