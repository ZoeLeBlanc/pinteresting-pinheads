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

	
//return search push it up to the dom elements

//Save search to board
});