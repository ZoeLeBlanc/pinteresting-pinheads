"use strict";

app.controller("BoardListCtrl", function($scope, $rootScope, $location, BoardFactory, PinFactory) {

  $scope.boards = [];

  BoardFactory.getBoardList($rootScope.user.uid).then(function(boards) {
    $scope.boards = boards;
    $rootScope.boardsArray = boards;
  });

  $scope.showCreateNewBoard = function() {
    $location.url("/boards/new");
  };

  $scope.deleteBoard = function(boardId) {
    BoardFactory.deleteBoard(boardId).then(function(response) {
      BoardFactory.getBoardList($rootScope.user.uid).then(function(boards) {
        $scope.boards = boards;
        $rootScope.boardsArray = boards;
      });
    });
  };



});
