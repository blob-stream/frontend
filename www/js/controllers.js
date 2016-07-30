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

	this.addNewBlob = function(newblob){
		newblob.voting = 0;
		newblob.creator = this.userName;
		newblob.dataURL = "data:" + newblob.dataURL.filetype + ";base64," + newblob.dataURL.base64;
		console.log(newblob.dataURL);
		BlobService.addNewBlob(newblob);
	}
})
    
.controller('blobStreamCtrl', function($scope, $ionicLoading, $http, BlobService, $rootScope){
	function init() {
		if($rootScope.showedFirstStart != true) {
			this.blobs = BlobService.getBlobs();
			$rootScope.showedFirstStart = true;
		}
	}
	init();

	this.blobs = BlobService.blobs;

	this.addVote = function(blob){
		BlobService.addVoteToServer(blob);
	}
});