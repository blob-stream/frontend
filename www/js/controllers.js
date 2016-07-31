angular.module('app.controllers', ['naif.base64'])
  
.controller('pickANameCtrl', function($scope, UserService) {
	this.userName = "";

	this.setUserName = function(){
		UserService.setUserName(this.userName);
	};
})

.controller('addABlobCtrl', function($scope, UserService, BlobService, $http, $window, $rootScope) { 
	this.userName = UserService.getUserName();

	// Using naif.base64 stuff, see https://github.com/adonespitogo/angular-base64-upload for more details
	$scope.onChange = function (e, fileList) {
		console.log("changing image...")
	};

	$scope.onLoad = function (e, reader, file, fileList, fileOjects, fileObj) {
		console.log("loading image...");
	};

	var uploadedCount = 0;
	$scope.files = [];
	//

	//adding new blob, set voting inital to 0 because of sorting. building up dataURL in the format the server wants it
	this.addNewBlob = function(newblob){
		if(newblob == null){
			alert("Please insert an image and a description at least.")
		}
		else{
			newblob.voting = 0;
			newblob.creator = this.userName;
			newblob.blobID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
			newblob.id = newblob.blobID;
			if(newblob.hasOwnProperty("dataURL")){
				newblob.dataURL = "data:" + newblob.dataURL.filetype + ";base64," + newblob.dataURL.base64;
				BlobService.addNewBlob(newblob);
			} else {
				alert("Please insert an image. The maximum size is 500kb.");
			}
		}
	}
})
    
.controller('blobStreamCtrl', function($scope, $ionicLoading, $http, BlobService, $rootScope){
	//Load the initial blob list only on the first start.
	function init() {
		if($rootScope.showedFirstStart != true) {
			this.blobs = BlobService.getBlobs();
			$rootScope.showedFirstStart = true;
		}
	}
	init();

	//"update" this.blobs for getting self-added blobs, votes
	this.blobs = BlobService.blobs;

	//add Votes to show blobs earlier
	this.addVote = function(blob){
		BlobService.addVoteToServer(blob);
	}
});