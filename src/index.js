
var accApp = angular.module('accApp', ['ui.router']);

accApp.config(function($stateProvider) {
  var mainState = {
    name: 'main',
    url: '/main',
    component: 'main'
  };

  var alt1State = {
    name: 'alt1',
    url: '/alt1',
    component: 'alt1'
  };

  var alt2State = {
    name: 'alt2',
    url: '/alt2',
    component: 'alt2'
  };

  $stateProvider.state(mainState);
  $stateProvider.state(alt1State);
  $stateProvider.state(alt2State);
});

accApp.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
