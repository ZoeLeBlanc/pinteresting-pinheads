"use strict";
let isAuth = (AuthFactory)=>{
	new Promise( (resolve, reject)=>{
		if (AuthFactory.isAuthenticated()){
			resolve();
		} else {
			reject();
		}
	});
};
app.run(function($rootScope, $location, AuthFactory, FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
		let logged = AuthFactory.isAuthenticated();
		let appTo;
		if (currRoute.originalPath){
			appTo = currRoute.originalPath.indexOf('/auth') !== -1;
		}
		console.log("appTo", appTo);
		if(!appTo && !logged){
			event.preventDefault();
			$location.path('/auth');
		}
	});
});

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl'
		})
		.when('/auth', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl'
		})
		// .when('/items/list', {
		// 	templateUrl: 'partials/item-list.html',
		// 	controller: 'ItemListCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/items/new', {
		// 	templateUrl: 'partials/item-new.html',
		// 	controller: 'ItemNewCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/items/view/:id', {
		// 	templateUrl: 'partials/item-view.html',
		// 	controller: 'ItemViewCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/items/edit/:id', {
		// 	templateUrl: 'partials/item-new.html',
		// 	controller: 'ItemEditCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/logout', {
		// 	templateUrl: 'partials/auth.html',
		// 	controller: 'AuthCtrl'
		// })
		.otherwise('/auth');
});