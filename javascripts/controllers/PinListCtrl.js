"use strict";

app.controller("PinListCtrl", function ($scope, $rootScope, $routeParams, PinFactory) {
	
	$scope.pins = [];
	$scope.selectedPin = {};

	$scope.selectedBoard = {};
	console.log("selectedBoard title", $scope.selectedBoard);
	$scope.boardId = $routeParams.id;

	let getPins = function(){
		PinFactory.getPinList($rootScope.user.uid).then(function(fbPins){
			$scope.pins = fbPins;	
		});
	};

	getPins();

	$scope.deletePin = function(pinId){
		PinFactory.deletePin(pinId).then(function(response){
			getPins();
		});
	};

	$scope.selectPin = function(pinId, selectedBoard){
		PinFactory.getSinglePin(pinId).then(function(onePin){
		onePin.id = pinId;
		$scope.selectedPin = onePin;

		$scope.saveEditedPin(selectedBoard, $scope.selectedPin);
		});
	};

	$scope.editedPin = {};
	$scope.saveEditedPin = (selectedBoard, selectedPin)=>{
		$scope.editedPin.pinTitle = selectedPin.pinTitle;
		$scope.editedPin.boardid = selectedBoard;
		$scope.editedPin.url = selectedPin.url;
		$scope.editedPin.uid = $rootScope.user.uid;
		$scope.editedPin.id = selectedPin.id;
		PinFactory.editPin($scope.editedPin).then((editResponse)=>{
			$scope.editedPin = {};
			$scope.selectedPin = {};
			getPins();
		});
	};
});