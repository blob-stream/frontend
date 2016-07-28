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
				url: service.serverUrl + '/events/recent/10'
			}).success(function(data){
				httpServerData = data;

				//httpHttpServerData = httpServerData;
				for (var i = 0; i < httpServerData.length; i++) {
					if(httpServerData[i].verb = "newBlob"){
						$http({
							method: 'GET',
							url: service.serverUrl + '/blob/get/' + httpServerData[i].blobID
						}).success(function(data){
							console.log(data);
						}).error(function(data){
							console.log("Error loading blob " + httpServerData[i].blobID + " from server. Got following: " + data);
						});
					} //else {
				//		service.addVoteToApp(httpServerData[i].blobID);
				//	}
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
			angular.copy(service.blobs);

/*			$http({
				method: 'POST',
				url: service.serverUrl + '/blob/create',
				data: { newBlob }
			}).success(function(data){
				angular.copy(data.newBlob, service.blob)
			}).error(function(data){
				console.log("Error adding blob." + data);
			});*/
		},
		addVoteToServer: function(blob){

/*			$http({
				method: 'POST',
				url: service.serverUrl + '/blob/vote/' + blob.blobID,
				data: { 
					"verb": "addVote", // auch noch "removeVote"
					"voter": blob.creater,
					"blobID": blob.blobID //do we really need this?
				}
			}).success(function(data){
				//addVoteToApp(blob.blobID);
			}).error(function(data){
				console.log("Error voting up." + data);
			});*/
		},
		addVoteToApp: function(blobID){
/*			if(blob.myProp){
			    alert("yes, i have that property");
			};*/
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
			if (name != "") {
				userName = name;
			} else {
				userName = "Anonymous";
			}
		}
	};
}])
