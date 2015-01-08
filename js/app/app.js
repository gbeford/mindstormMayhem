/**
* Created with SampleAngular.
* User: gbeford
* Date: 2014-11-25
* Time: 06:41 PM
* To change this template use Tools | Templates.
*/


'use strict';

// declare a module
var robotApp = angular.module('robotApp',  ['ui.router']);

// Do some configuration, mainly settings routes
//
robotApp.config( function($stateProvider, $urlRouterProvider){  
    $urlRouterProvider.otherwise('/home');
    
  $stateProvider
  
    .state('home',{
           url:'/home',
           templateUrl: 'home.html'
           
           })
   .state('teamList',{
           url:'/teamList',
           templateUrl: 'teamList.html',
          controller: 'teamListCtrl'
           })
  
   .state('register',{
           url:'/register',
           templateUrl: 'register.html',
          controller: 'registerFormCtrl'
           })
     .state('login',{
           url:'/login',
           templateUrl: 'login.html',
          controller: ''
           })
   .state('eventLogin',{
           url:'/eventLogin',
           templateUrl: 'eventLogin.html',
          controller: ''
           })
   .state('registerEvent',{
           url:'/registerEvent',
           templateUrl: 'registerEvent.html',
          controller: ''
           })

 
  
});
  
  
  
 /* .when('/register',{
    
    templateUrl: 'register.html',
    controller: 'registerFormController',
    controllerAs: 'registerFormCtrl',
    layout: {
      toolbar: {
        title: 'register',
        //url: 'dashboard-toolbar.html'
      }
    }
    
  })
  
  .when('/login',{
    templateUrl: 'login.html',
    controller: 'loginController',
    controllerAs: 'adminCtrl',
    layout: {
      toolbar: {
        title: 'Admin'
      }
    }
  });*/
  