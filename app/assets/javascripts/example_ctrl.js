(function () {
  "use strict";

  angular.module("app").controller("exampleCtrl", function($scope) {

    $scope.reviews = ["Angular is awesome", "Angular is the bomb", "Angular is bougie"];

    $scope.addReview = function(review) {
      $scope.reviews.push(review);
    }


    window.$scope = $scope;


  });
}());