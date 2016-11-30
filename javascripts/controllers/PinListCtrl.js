"use strict";

app.controller("PinListCtrl", function ($scope, $rootScope, PinFactory) {
	
	$scope.pins = [];

	let getPins = function(){
		PinFactory.getPinList($rootScope.user.uid).then(function(fbPins){
			$scope.Pins = fbPins;	
		});
	};

	getPins();

	$scope.deletePin = function(pinId){
		console.log("you deleted me", pinId);
		PinFactory.deletePin(pinId).then(function(response){
			getPins();
		});
	};

	$scope.inputChange = function(thingy){
		PinFactory.editPin(thingy).then(function(response){
			console.log("ctrl inputChange response", response);
		});
	};
});