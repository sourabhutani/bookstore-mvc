 'use strict';

var app = angular.module('newWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise({ redirectTo: '/login' });
}]);


/**
 * Get Genres data for sidebar
 */
app.controller( 'GenreCtrl', [ '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
 console.log(" GenreCtrl loadinggg");
$scope.getGenres = function(){
    $http({
        method: 'get', 
        url: 'http://localhost:3000/api/genres'
    }).then(function (r) {
        $scope.genres = r.data.respData.response;
        console.log($scope.genres);
  },function (error){
      console.log(error, 'Failed to get data!');
  });

}

}]);



/**
 * Get books data for home
 */
app.controller( 'PageCtrl', [ '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
 console.log(" PageCtrl loadinggg");
$scope.getBooks = function(){
    $http({
        method: 'get', 
        url: 'http://localhost:3000/api/books'
    }).then(function (r) {
        $scope.books = r.data.respData.response;
        console.log($scope.genres);
  },function (error){
      console.log(error, 'Failed to get data!');
  });

}

}]);