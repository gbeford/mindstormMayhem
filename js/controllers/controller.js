/**
 * Created with Robotics_Angular.
 * User: gbeford
 * Date: 2014-12-02
 * Time: 04:09 PM
 * To change this template use Tools | Templates.
 */
'use strict';
// declare a module
//var robotApp = angular.module('robotApp', []);
robotApp.controller('registerFormCtrl', function($scope, $http) {
    $scope.register = {
        fname: '',
        lname: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: 65202,
        cities: [],
        selectCityOption: '',
        role: '',
        volunterType: ''
    };
    $scope.roles = [{
        roleId: '1',
        roleName: 'Ref'
    }, {
        roleId: '2',
        roleName: 'Judge'
    }, {
        roleId: '3',
        roleName: 'Volunteer'
    }];
    console.log($scope.roles);
    console.log($scope.roles.roleId);
    $scope.volunteerTypes = [{
        typeId: '0',
        typeName: 'Select A Volunteer Type'
    }, {
        typeId: '1',
        typeName: 'Kitchen Help'
    }, {
        typeId: '2',
        typeName: 'Announcer'
    }, {
        typeId: '3',
        typeName: 'Welcome Table'
    }, {
        typeId: '4',
        typeName: 'Dj'
    }, {
        typeId: '5',
        typeName: 'Usher'
    }, {
        typeId: '6',
        typeName: 'Cook'
    }];
    $scope.selectVTOption = $scope.volunteerTypes[0];
    $scope.processAddress = function() {
        // http://api.smartystreets.com/zipcode?zipcode=90023&auth-id=19bb02c0-57ff-427d-9639-47d6a5703713&auth-token=vSbq7gXrz7r6VWNyq0Hh
        //baseurl:'https://api.smartystreets.com/zipcode?',
        var auth_id = '19bb02c0-57ff-427d-9639-47d6a5703713';
        var auth_token = 'vSbq7gXrz7r6VWNyq0Hh';
        var url = 'https://api.smartystreets.com/zipcode?zipcode=' + $scope.register.zip + '&auth-id=' + auth_id + '&auth-token=' + auth_token;
        // var url = 'https://api.smartystreets.com/zipcode?city=' + $scope.register.city + '&state=' + $scope.register.state  + '&auth-id=' + auth_id + '&auth-token=' + auth_token;
        console.log($scope.register);
        console.log("url " + url);
        $http.get(url).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.register.cities = [];
            if(data[0].status == undefined) {
                for(var i = 0; i < data[0].city_states.length; i++) {
                    // console.log('success ' + data[0].city_states[i].city + ', ' + data[0].city_states[i].state_abbreviation);
                    $scope.register.cities.push(data[0].city_states[i].city + ', ' + data[0].city_states[i].state_abbreviation);
                    console.log($scope.register.cities);
                }
                $scope.register.cities.unshift("select your city/state");
                $scope.register.selectCityOption = $scope.register.cities[0];
            } else if(data[0].status == "invalid_zipcode") {
                alert(data[0].reason);
                console.log(data[0].reason);
            }
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.    
            console.log('error ' + data);
        });
    }
});
robotApp.controller('eventRegisterCtrl', function($scope, stateService) {
        $scope.eventRegister = {
            fllNumber: '',
            teamName: '',
            coachFname: '',
            coachLname: '',
            coachEmail: '',
            altCoachFname: '',
            altCoachLname: '',
            altCoachEmail: '',
            town: '',
            state: '',
            states: [],
            selectStateDDL: '',
        };
        $scope.processState = function() {
            var stateData = {
                baseurl: 'json/state.json',
                state_id: '',
                state: '',
                stateAbbrv: ''
            };
            console.log($scope.eventRegister);
            //link this function up to ng-click or whichever event you like
            stateService.returnData(stateData).success(function(data, status, headers) {
                //view object properties in console,
                console.log(data[0] );
                
                 $scope.eventRegister.states = data;
                //verify array is filled
                console.log($scope.eventRegister.states);
            });
        };
    });

robotApp.controller('teamListCtrl', function($scope, $http) {
    //https://docs.angularjs.org/tutorial/step_07
    //
    $scope.teams = [];
    $scope.test = "hello";
    $http.get('json/teams.json').
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.teams = data;
        /*for( var i = 0; i < data.length; i++)
      {      
          console.log('success ' + data[i].teamNumber);
          $scope.teams.push(data[i]);
      }  */
        console.log($scope.teams);
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.    
        console.log('error ' + data);
    });
});