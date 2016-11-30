"use strict";

app.controller("BoardListCtrl", function($scope, $rootScope, $location, BoardFactory) {

  $scope.boards = [];

  BoardFactory.getBoardList($rootScope.user.uid).then(function(boards) {
    console.log("boards: ", boards);
    $scope.boards = boards;
    $rootScope.boardsArray = boards;
  });

  $scope.showCreateNewBoard = function() {
    $location.url("/boards/new");
  };



});
