
const accApp = angular.module('accApp', ['ngRoute']);

accApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "src/templates/main.html"
  })
  .when("/alt1", {
    templateUrl : "src/templates/alt1.html"
  })
  .when("/alt2", {
    templateUrl : "src/templates/alt2.html"
  });
  $locationProvider.html5Mode(true);
});;
