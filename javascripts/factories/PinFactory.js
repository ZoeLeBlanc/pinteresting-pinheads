"use strict";
app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG){
	//Firebase: get all Items
	var getPinList = function(userId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="uid"&equalTo="${userId}"`)
			 .success( (response)=>{
			 	let pins = [];
			 	Object.keys(response).forEach((key)=>{
			 		response[key].id = key;
			 		pins.push(response[key]);
			 	});
			 	resolve(pins);
			 })
			 .error( (errorResponse)=>{
			 	reject(errorResponse);
			 });
		});
	};
	//Firebase: send a new item to Firebase
	var postNewPin = function(newPin){
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`, JSON.stringify({
				pinTitle: newPin.pinTitle,
				boardid: newPin.boardid,
				url: newPin.url,
				uid: newPin.uid,
				note: newPin.note
				})
			)
			 .success( (postResponse)=>{
			 	resolve(postResponse);
			 })
			 .error( (errorResponse)=>{
			 	reject(errorResponse);
			 });
		});
	};
	var deletePin = function(pinId){
		return $q((resolve, reject)=>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
			 .success( (deleteReponse)=>{
			 	resolve(deleteReponse);
			 })
			 .error( (deleteError)=>{
			 	reject(deleteError);
			 });
		});
	};
	var getSinglePin = function(pinId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
			 .success( (getSingleReponse)=>{
			 	resolve(getSingleReponse);
			 })
			 .error( (getSingleError)=>{
			 	reject(getSingleError);
			 });
		});
	};
	var editPin = function(editPin){
		return $q((resolve, reject)=>{
			$http.put(`${FIREBASE_CONFIG.databaseURL}/pins/${editPin.id}.json`, 
				JSON.stringify({
					pinTitle: editPin.pinTitle,
					boardid: editPin.boardid,
					url: editPin.url,
					uid: editPin.uid,
					note: editPin.note
				})
			)
			 .success( (editResponse)=>{
			 	resolve(editResponse);
			 })
			 .error( (errorResponse)=>{
			 	reject(errorResponse);
			 });
		});
	};
	return {getPinList, postNewPin, deletePin, getSinglePin, editPin};
});

