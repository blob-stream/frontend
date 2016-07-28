angular.module('app.controllers', [])
  
.controller('pickANameCtrl', function($scope, UserService) {
	this.userName = "";

	this.setUserName = function(){
		UserService.setUserName(this.userName);
	};
})

.controller('addABlobCtrl', function($scope, UserService, BlobService) {
	this.userName = UserService.getUserName();

	this.addNewBlob = function(newblob){
		newblob.creator = this.userName;
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
	
	$scope.coolIt = function($scope, $item){

	}
});