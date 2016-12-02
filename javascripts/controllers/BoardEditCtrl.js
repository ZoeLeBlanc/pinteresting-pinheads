"use strict";

app.controller("BoardEditCtrl", function($scope, $rootScope, $location, $routeParams, BoardFactory, PinFactory) {
  $scope.boardToRename = {};
  let boardID = $routeParams.id;
  BoardFactory.getSingleBoard(boardID).then(function(singleBoard) {
    singleBoard.id = boardID;
    $scope.boardToRename = singleBoard;
    console.log("boardToRename", $scope.boardToRename);
  });

  $scope.renameBoard = function(editedBoardName) {
    $scope.boardToRename.boardTitle = editedBoardName;
    BoardFactory.editBoard($scope.boardToRename).then(function(response) {
      $scope.boardToRename = {};
      $location.url("/boards/list");
    });
  };
});
