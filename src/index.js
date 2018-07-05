
var accApp = angular.module('accApp', ['ui.router']);

accApp.config(function($stateProvider) {
  var mainState = {
    name: 'main',
    url: '/main',
    component: 'main'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    component: 'about'
  };

  var teamState = {
    name: 'team',
    url: '/team',
    component: 'team'
  };

  var investmentsState = {
    name: 'investments',
    url: '/investments',
    component: 'investments'
  };

  var targetsState = {
    name: 'targets',
    url: '/targets',
    component: 'targets'
  };

  var valuesState = {
    name: 'values',
    url: '/values',
    component: 'values'
  };

  var givingState = {
    name: 'giving',
    url: '/giving',
    component: 'giving'
  };

  var contactState = {
    name: 'contact',
    url: '/contact',
    component: 'contact'
  };

  var legalState = {
    name: 'legal',
    url: '/legal',
    component: 'legal'
  };

  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);
  $stateProvider.state(teamState);
  $stateProvider.state(investmentsState);
  $stateProvider.state(valuesState);
  $stateProvider.state(givingState);
  $stateProvider.state(targetsState);
  $stateProvider.state(contactState);
  $stateProvider.state(legalState);
});

accApp.config(['$stateProvider','$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
  }
]);

accApp.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});


