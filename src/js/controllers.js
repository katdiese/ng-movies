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
  $scope.singleMovie = function(movie) {
    moviesService.singleMovie(movie).then(function(result) {
      $scope.movieResult = result.data;
    })
  }
  $scope.singleMovie($routeParams.movieid);
}])