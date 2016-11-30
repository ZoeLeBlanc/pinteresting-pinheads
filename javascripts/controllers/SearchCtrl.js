"use strict";

app.controller("SearchCtrl", function($scope, $rootScope, $routeParams, SearchFactory){
//Need a search to get api from imgur, pass query
	$scope.searchImages = [];
	
	$scope.searchImgur = (searchTerm)=>{
		console.log("searchTerm", searchTerm);
		SearchFactory.getImgurSearch(searchTerm).then((searchItems)=>{
			console.log("searchItems", searchItems.data);
			$scope.searchImages = searchItems.data;
			
		});
	};

	console.log("boards 0", $rootScope.boardsArray[0].id);
		console.log("boards 1", $rootScope.boardsArray[1].id);
	
//return search push it up to the dom elements

//Save search to board
});