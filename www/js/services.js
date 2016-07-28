angular.module('app.services', [ ])

.factory('BlankFactory', [function(){

}])

.factory('BlobService', ['$http', function($http){
	var service = {
		blobs : [],
		serverUrl: "https://mwa.perguth.de",
		serverData: [],
		getBlobs: function(){
			this.blobs = [];
			var httpData = this.blobs;
			var httpServerData = this.serverData;

/*			$http({
				method: 'GET',
				url: service.serverUrl + '/events/recent/10',
			}).success(function(data){
				httpServerData = data;

				//httpHttpServerData = httpServerData;
				for (var i = 0; i < httpServerData.length; i++) {
					if(httpServerData[i].verb = "newBlob"){
						$http({
							method: 'GET',
							url: service.serverUrl + '/blob/get/' + httpServerData[i].blobID,
						}).success(function(data){
							console.log(data);
						}).error(function(data){
							console.log("Error loading blob " + httpServerData[i].blobID + " from server. Got following: " + data);
						});
					}
				}
			}).error(function(data){
				console.log("Error loading blob list from server. Got following: " + data);
			});*/

			$http.get('/js/dummy.json').success(function(data){
				data.entries.forEach(function (elem, index) {
					httpData.push(elem);
				})
			})
			.error(function(data){
				console.log("Error loading blobs from file. Got following: " + data);
			});
		},
		addNewBlob: function(newBlob){
			service.blobs.push(newBlob);
			angular.copy(service.blobs);;
		}
	};
	return service;
}])

.service('UserService', [function(){
	var userName = '';

	return{
		getUserName: function(){
			return userName;
		},
		setUserName: function(name){
			userName = name;
		}
	};
}])
