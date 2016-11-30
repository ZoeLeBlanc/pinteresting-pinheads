"use strict";

app.controller("BoardListCtrl", function($scope, $rootScope, $location, BoardFactory) {
  console.log("BoardListCtrl");
  console.log("uid: ", $rootScope.user.uid);
  BoardFactory.getBoardList($rootScope.user.uid).then(function(boards) {
    console.log("boards: ", boards);
    $scope.boards = boards;
  });
});
