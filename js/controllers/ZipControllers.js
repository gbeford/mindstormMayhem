'use strict';

/* Controllers */



//create simple controller
robotApp.controller('registerController', function($scope, zipcodeService){
  $scope.hello="Hello Optum";
    $scope.register = { fname: "", };
  
    
    console.log("first "  + $scope.register.fname);
  $scope.processAddress = function (){
   //build GET options -- substitute street, city, etc with your form data
    var zipData  = {
      baseurl:'https://api.smartystreets.com/zipcode?',
      auth_id: '19bb02c0-57ff-427d-9639-47d6a5703713',
      auth_token: 'vSbq7gXrz7r6VWNyq0Hh', 
      street: '950 Winter St.', 
      street2: '', 
      city: 'Waltham', 
      state: 'MA', 
      zipcode: ''
    };

      console.log($scope.register);

    //link this function up to ng-click or whichever event you like
   /* zipcodeService.returnData(zipData)
     .success(function(data, status, headers) {
      //view object properties in console, remove later
      console.log(zipData[0]);
      
        //replace console.log with form elements (e.g. form.zipcode = ...)
      for (var d in data){

          console.log(d + ": " + data[d].zipcodes);
      }

      var zipcodes =  data[d].zipcodes;

      for (var z in zipcodes){
        var nestedzipcodes = zipcodes[z];
            for (var n in nestedzipcodes){
              console.log(nestedzipcodes[n]);
            }
      }*/
        
        //link this function up to ng-click or whichever event you like
    zipcodeService.returnData(zipData)
     .success(function(data, status, headers) {
      //view object properties in console, remove later
      console.log(data[0]);
      
      //replace console.log with form elements (e.g. form.zipcode = ...)
      for (var d in data){

          console.log(d + ": " + data[d].zipcodes);
      }

      var zipcodes =  data[d].zipcodes;

      for (var i = 0; i< zipcodes.length; i++){
        console.log(zipcodes[i].zipcode);
      }


    });
  };
});

//http://api.smartystreets.com/zipcode?zipcode=90023&auth-id=19bb02c0-57ff-427d-9639-47d6a5703713&auth-token=vSbq7gXrz7r6VWNyq0Hh

  //query built from smartystreets.com

    //http://api.smartystreets.com/zipcode?
    //auth-id=19bb02c0-57ff-427d-9639-47d6a5703713
    //auth-token=vSbq7gXrz7r6VWNyq0Hh
    //street=950%20Winter%20St&
    //street2=&
    //city=Waltham&
    //state=MA&zipcode=&candidates=10
















