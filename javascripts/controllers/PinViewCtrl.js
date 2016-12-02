"use strict";

app.controller("PinViewCtrl", function ($scope, $routeParams, PinFactory) {
	
	$scope.selectedPin = {};
	let pinId = $routeParams.id;

	PinFactory.getSinglePin(pinId).then(function(onePin){
		onePin.id = pinId;
		$scope.selectedPin = onePin;

		console.log("onePin", $scope.selectedPin);
	});
});