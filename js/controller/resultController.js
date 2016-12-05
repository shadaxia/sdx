  var app = angular.module('ionicApp', []);
  app.controller('myCtrl', function($scope, $http) {
  $http.get("config/data.json").success(function (response) {$scope.names = response.result;});
});
