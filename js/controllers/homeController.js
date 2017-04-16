cubicleApp.controller('homeController', function($scope, $rootScope, $http, $location, $uibModal, $log, $document, $window) {
	
	$scope.searchArtist = function() {
		if($scope.artistName=="Jack"&&$scope.limit=="4"){
			$http({
			method : 'GET',
			url : host.concat("search?term=", $scope.artistName, "&limit=", $scope.limit),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			$scope.status = response.status;
			$scope.artistNameFetched = response.data;
			console.log("Webservice Get Success ");
			$("#searchModal").modal('hide');
			$scope.showTabs=true;
		}, function(response) {
			console.log("Webservice Error");
			$scope.showTabs=true;
			$("#searchModal").modal('hide');
		});
		}
		else{
			alert("Please Enter Artist Name as Jack and Limit as 4");
		}
	};
	$scope.showTabs=false;
	$scope.initJack = function(){
		$http({
			method : 'GET',
			url : host.concat("search?term=Jack&limit=1"),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			$scope.status = response.status;
			$scope.artistNameFetched = response.data.results.artistName;
			$scope.trackNameFetched = response.data.results.trackName;
			$scope.artworkFetched = response.data.results.artworkUrl30;
			console.log("Webservice Get Success ");
			$("#searchModal").modal('hide');
		}, function(response) {
			console.log("Webservice Error");
		});
	};
	$scope.initJack();
	$scope.callJack = function(limit){
		$http({
			method : 'GET',
			url : host.concat("search?term=Jack&limit=",limit),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			$scope.status = response.status;
			$scope.artistNameFetched = response.data.results.artistName;
			$scope.trackNameFetched = response.data.results.trackName;
			$scope.artworkFetched = response.data.results.artworkUrl30;
			console.log("Webservice Get Success ");
			$("#searchModal").modal('hide');
		}, function(response) {
			console.log("Webservice Error");
		});
	};
});