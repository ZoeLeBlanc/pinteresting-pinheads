"use strict";

app.controller("SearchCtrl", function($scope, $rootScope, $routeParams, $timeout, SearchFactory, PinFactory){
//Need a search to get api from imgur, pass query
	$scope.searchImages = [];
//return search push it up to the dom elements
	$scope.searchImgur = (searchTerm)=>{
		console.log("searchTerm", searchTerm);
		SearchFactory.getImgurSearch(searchTerm).then((searchItems)=>{
			console.log("searchItems", searchItems.data);
			$scope.searchImages = searchItems.data;
			
		});
	};
	//Save search to board
	$scope.newPin = {};
	$scope.reEnable = ()=>{
		if($scope.isDisabled){
			$scope.isDisabled = false;
		}
	};
	$scope.savePin = (selectedBoard, searchImage)=>{
		
    	$scope.isDisabled = true;
		console.log("selectedBoard", selectedBoard);
		// $timeout(function(){
		// 	var el = document.getElementById('cardTest');
		// 	console.log("el", el);
		// 	angular.element(el).triggerHandler('click');
		// }, 0);
		$scope.newPin.pinTitle = searchImage.title;
		$scope.newPin.boardid = selectedBoard;
		$scope.newPin.url = searchImage.link;
		$scope.newPin.uid = $rootScope.user.uid;
		PinFactory.postNewPin($scope.newPin).then((postResponse)=>{
			console.log("postResponse", postResponse);
			$scope.newPin = {};
		});
	};

});