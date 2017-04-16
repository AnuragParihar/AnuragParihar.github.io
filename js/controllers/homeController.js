cubicleApp.controller('homeController', function($scope, $rootScope, $http, $location, $uibModal, $log, $document, $window) {
	
	$scope.showTabs=false;
	
	// Ajax Call failed due to CORS
	$scope.searchArtist = function() {
		if($scope.artistName=="Jack"&&$scope.limit=="4"){
			$http({
			method : 'GET',
			url : host.concat("search?term=", $scope.artistName, "&limit=", $scope.limit, "&callback=dataReceiver"),
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
	
	// Ajax Call failed due to CORS
	$scope.initJack = function(){
		$http({
			method : 'GET',
			url : host.concat("search?term=Jack&limit=1", "&callback=dataReceiver"),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			$scope.status = response.status;
			console.log("Webservice Get Success ");
			$("#searchModal").modal('hide');
		}, function(response) {
			console.log("Webservice Error");
		});
	};
	$scope.initJack();
	$scope.artistNameFetched = window.data.results[0].artistName;
	$scope.trackNameFetched = window.data.results[0].trackName;
	$scope.artworkFetched = window.data.results[0].artworkUrl30;
	
	$scope.artistNameFetched1 = window.data.results[1].artistName;
	$scope.trackNameFetched1 = window.data.results[1].trackName;
	$scope.artworkFetched1 = window.data.results[1].artworkUrl30;
	
	$scope.artistNameFetched2 = window.data.results[2].artistName;
	$scope.trackNameFetched2 = window.data.results[2].trackName;
	$scope.artworkFetched2 = window.data.results[2].artworkUrl30;
	
	$scope.artistNameFetched3 = window.data.results[3].artistName;
	$scope.trackNameFetched3 = window.data.results[3].trackName;
	$scope.artworkFetched3 = window.data.results[3].artworkUrl30;
			
	// Ajax Call failed due to CORS
	$scope.callJack = function(limit){
		$http({
			method : 'GET',
			url : host.concat("search?term=Jack&limit=",limit, "&callback=dataReceiver"),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			$scope.status = response.status;
			$scope.artistNameFetched = window.data[0].results.artistName;
			$scope.trackNameFetched = window.data[0].results.trackName;
			$scope.artworkFetched = window.data[0].results.artworkUrl30;
			console.log("Webservice Get Success ");
			$("#searchModal").modal('hide');
		}, function(response) {
			console.log("Webservice Error");
		});
	};
});