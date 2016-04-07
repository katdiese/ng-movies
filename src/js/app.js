var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'moviesController'
    })
    .when('/:movieid', {
      templateUrl: 'partials/show.html',
      controller: 'singleMovieController'
    })
})
