app.controller('moviesController',
  ['$scope', 'moviesService',
    function($scope, moviesService) {
  $scope.movie = "";
  $scope.greeting = "Hello World!";
  $scope.searchMovies = function() {
    moviesService.findMovies($scope.movie).then(function(result) {
      $scope.allMovies = result.data.Search;
    });
  };
}]);

app.controller('singleMovieController', ['$scope', '$routeParams', 'moviesService', function($scope, $routeParams, moviesService) {
  $scope.message = "blah";
  $scope.singleMovie = function(movie) {
    console.log('here');
    moviesService.singleMovie(movie).then(function(result) {
      $scope.movieResult = result.data;
    })
  }
  $scope.singleMovie($routeParams.movieid);
}])