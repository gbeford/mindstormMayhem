/**
* Created with AngularTest.
* User: gbeford
* Date: 2014-03-20
* Time: 04:17 PM
* To change this template use Tools | Templates.
*/

'use strict';

/* Services */


//create services container
angular.module('robotApp.services', []).
factory('zipcodeService', function() {
  var serviceInstance = {};
  return serviceInstance;
});


// our zipcode service
robotApp.service('zipcodeService', function($http){
  function getZipcode(zipData){
    return $http({
    url: zipData.baseurl, 
    method: "GET",
    params: {'auth-id': zipData.auth_id, 'auth-token': zipData.auth_token, 
    street: zipData.street, street2: zipData.street2, city: zipData.city, 
    state: zipData.state, zipcode: zipData.zipcode}
  });
}
 // Return the asynch function as closure
 // events
  return {
    returnData: function(zipData) {       
      return getZipcode(zipData, 'd');
    }
  };
});


//create state services container
angular.module('robotApp.services', []).
factory('stateService', function() {
  var serviceInstance = {};
  return serviceInstance;
});
console.log('here');
// our state service
robotApp.service('stateService', function($http){
  function getState(stateData){
    return $http({
    url: stateData.baseurl, 
    method: "GET",
    params: {'state-id': stateData.id, 'state': stateData.state, 
    stateAbbrv: stateData.stateAbbreviation}
  });
        console.log('service ' + stateData);
}
 // Return the asynch function as closure
 // events
  return {
    returnData: function(stateData) {       
      return getState(stateData, 'd');
    }
  };
});
