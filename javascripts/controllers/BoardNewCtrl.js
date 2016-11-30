"use strict";

app.controller("BoardNewCtrl", function($scope, $rootScope, $location, BoardFactory) {
  $scope.newBoard = {};
  console.log("BoardNewCtrl");

  $scope.createNewBoardThenReloadBoards = function(newBoardName) {
    console.log("createNewBoardThenReloadBoards");
    $scope.newBoard.boardTitle = $scope.newBoardName;
    $scope.newBoard.uid = $rootScope.user.uid;
    BoardFactory.postNewBoard($scope.newBoard).then(function(itemID) {
      $location.url("/boards/list");
      $scope.newBoard = {};
    });
  };

});
