angular.module('app.services', [ ])

.factory('BlankFactory', [function(){

}])

.factory('BlobService', ['$http', function($http){
	var service = {
		blobs : [],
		serverUrl: "https://mwa.perguth.de",
		serverData: [],
		votes: [],

		//load blobs form server and dummy-file. All the data is loaded in blobs[].
		getBlobs: function(){
			this.blobs = [];
			this.votes = [];
			var httpData = this.blobs;
			var httpServerData = this.serverData;
			var httpVotes = this.votes;

			$http({
				method: 'GET',
				url: service.serverUrl + '/events/recent/10'
			}).success(function(data){
				httpServerData = data;
				console.log(httpServerData);

				for (var i = 0; i < httpServerData.length; i++) {
					if(httpServerData[i].verb == "newBlob"){
						$http({
							method: 'GET',
							url: service.serverUrl + '/blob/get/' + httpServerData[i].blobID
						}).success(function(data){
							data.voting = 0;

							httpData.push(data);
						}).error(function(data){
							console.log("Error loading blob " + httpServerData[i].blobID + " from server. Got following: " + data);
						});
					} 
			        else {
			            httpVotes.push(httpServerData[i]);
			        }
				}
			}).error(function(data){
				console.log("Error loading blob list from server. Got following: " + data);
			});

			$http.get('/js/dummy.json').success(function(data){
				data.entries.forEach(function (elem, index) {
					httpData.push(elem);
				})
			})
			.error(function(data){
				console.log("Error loading blobs from file. Got following: " + data);
			});
		},
		//add new blobs to blobs[] and the server 
		addNewBlob: function(newBlob){
			//if blob is added locally it will also get displayed when data was not sent so server. get to be changed later on.
			service.blobs.push(newBlob);
			console.log("New blob in addNewBlob function: ")
			console.log(newBlob);

			//pushing data to server => now working :)
			$http({
				method: 'POST',
				url: service.serverUrl + '/blob/create',
				data: { id: newBlob.blobID, 
						heading: newBlob.heading,
						description: newBlob.description,
						creater: newBlob.creater,
						dataURL: newBlob.dataURL }
			}).success(function(data){
				console.log("Adding new blob successfully.")
			}).error(function(data){
				console.log("Error adding blob." + data);
			});
		},
		//not working :(
		addVotesFromServer: function(){
			for (var i = 0; i < service.votes.length; i++) {
				if (service.votes[i].verb == "addVote" && service.votes[i].hasOwnProperty("blobID")){
					console.log("got until here.")
		        }
		    }
		},
		//add Votes to server (someone clicked the Cool stuff button)
		addVoteToServer: function(blob){
/*			$http({
				method: 'POST',
				url: service.serverUrl + '/blob/vote' + blob.blobID,
				data: { 
					"verb": "addVote", // auch noch "removeVote"
					"voter": blob.creater,
					"blobID": blob.id 
				}
			}).success(function(data){*/
				service.addVoteToApp(blob);
/*			}).error(function(data){
				console.log("Error voting up." + data);
			});*/
		},
		//increase blob.voting. The blobs are ordered by blob.voting, so they will be shown earlier.
		addVoteToApp: function(blob){
			if(blob.voting){
			    blob.voting++;
			} else {
				blob.voting = 1;
			}
			angular.copy(service.blobs);
		}
	};
	return service;
}])

//service to get and set the userName
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
