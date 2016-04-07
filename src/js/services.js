app.service("moviesService", ['$http', '$q', function($http, $q) {
  return {
    findMovies: function(title) {
      return $http({
        url: 'http://www.omdbapi.com/?s=' + title,
        method: 'GET'
      }).then(function(result) {
        return result;
      })
    },
    singleMovie: function(id) {
      return $http({
        url: 'http://www.omdbapi.com/?i=' + id,
        method: 'GET'
      }).then(function(result) {
        console.log(result);
        return result;
      })
    }
  }
}]);