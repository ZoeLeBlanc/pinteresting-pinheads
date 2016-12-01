"use strict";

app.controller("SearchCtrl", function($scope, $location, $rootScope, $routeParams, $timeout, SearchFactory, PinFactory){
//Need a search to get api from imgur, pass query
	$scope.searchImages = [];
//return search push it up to the dom elements
	$scope.enterImgur = (event)=>{
		var keyCode = event.which || event.keyCode;
	    if (keyCode === 13) {
	        $scope.searchImgur($scope.searchQuery);
	    }
	};
	$scope.searchImgur = (searchTerm)=>{
		console.log("searchTerm", searchTerm);
		SearchFactory.getImgurSearch(searchTerm).then((searchItems)=>{
			console.log("searchItems", searchItems.data);
			$scope.searchImages = searchItems.data;
			
		});
	};
	//Save search to board
	$scope.newPin = {};
	$scope.savePin = (selectedBoard, searchImage)=>{
		console.log("selectedBoard", selectedBoard);
		$scope.newPin.pinTitle = searchImage.title;
		$scope.newPin.boardid = selectedBoard;
		$scope.newPin.url = searchImage.link;
		$scope.newPin.uid = $rootScope.user.uid;
		PinFactory.postNewPin($scope.newPin).then((postResponse)=>{
			console.log("postResponse", postResponse);
			$scope.newPin = {};
		});
	};
	$scope.removeSearchImage = function(searchImage) { 
  		var index = $scope.searchImages.indexOf(searchImage);
  		$scope.searchImages.splice(index, 1);     
	};
	$scope.newBoard = function(){
		$location.url('/boards/new');
	};
});


