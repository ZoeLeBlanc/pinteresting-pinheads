"use strict";
app.factory("SearchFactory", function($q, $http){
	var getImgurSearch = (subReddit)=>{
		return $q((resolve,reject)=>{
			$http.get(`https://api.imgur.com/3/gallery/r/${subReddit}`, {
				headers: {
					'Authorization': 'Client-ID 103d470c3df850b'
				}
			})
			.success( (getImgurSearchResponse)=>{
				console.log("getImgurSearchResponse", getImgurSearchResponse);
				resolve(getImgurSearchResponse);
			})
			.error( (getImgurSearchError)=>{
				reject(getImgurSearchError);
			});
		});
	};
	return {getImgurSearch};
});
