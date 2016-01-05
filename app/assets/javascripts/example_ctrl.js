(function () {
  "use strict";

  angular.module("app").controller("exampleCtrl", function($scope) {

    $scope.reviews = [
    {
      text: "Angular is awesome",
      rating: 5,
      reviewer: "Burton Wax"
    },
    {
      text: "Angular is the bomb",
      rating: 4,
      reviewer: "Burton Wax"
    },
    {
      text: "Angular is tragic",
      rating: 1,
      reviewer: "Burton Wax"
    }
    ];

    $scope.addReview = function(review) {
      if (review) {
        // var review = {
        //   text: reviewText,
        //   rating: reviewRating,
        //   reviewer: reviewReviewer
        // };
        $scope.reviews.push(review);
        // $scope.reviewText = null;
        // $scope.reviewRating = null;
        // $scope.reviewReviewer = null;
      }
    }

    $scope.ifPositive = function(review) {
      return review.text.indexOf("stupid") === -1;
    }

    $scope.completeReview = function(index) {
      $scope.reviews.splice(index, 1);
    }


    window.$scope = $scope;


  });
}());