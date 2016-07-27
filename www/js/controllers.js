angular.module('app.controllers', [])
  
.controller('pickANameCtrl', function($scope, UserService) {
	this.userName = "";

	this.setUserName = function(){
		UserService.setUserName(this.userName);
	};
})

.controller('addABlobCtrl', function($scope, UserService) {
	this.userName = UserService.getUserName();
	/*this.newblob = {};
	this.newblob.creator = UserService.getUserName();*/

	this.addNewBlob = function(newblob){
		
	}
})
    
.controller('blobStreamCtrl', function($scope, $ionicLoading, $http, BlobService){
	this.dummies = BlobService.getBlobs();

	$scope.coolIt = function($scope, $item){
	}

	/*$scope.download = function() {
	    $ionicLoading.show({
	      template: 'Loading...'
	    });
	    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
	        fs.root.getDirectory(
	            "ExampleProject",
	            {
	                create: true
	            },
	            function(dirEntry) {
	                dirEntry.getFile(
	                    "test.png", 
	                    {
	                        create: true, 
	                        exclusive: false
	                    }, 
	                    function gotFileEntry(fe) {
	                        var p = fe.toURL();
	                        fe.remove();
	                        ft = new FileTransfer();
	                        ft.download(
	                            encodeURI("http://ionicframework.com/img/ionic-logo-blog.png"),
	                            p,
	                            function(entry) {
	                                $ionicLoading.hide();
	                                $scope.imgFile = entry.toURL();
	                            },
	                            function(error) {
	                                $ionicLoading.hide();
	                                alert("Download Error Source -> " + error.source);
	                            },
	                            false,
	                            null
	                        );
	                    }, 
	                    function() {
	                        $ionicLoading.hide();
	                        console.log("Get file failed");
	                    }
	                );
	            }
	        );
	    },
	    function() {
	        $ionicLoading.hide();
	        console.log("Request for filesystem failed");
	    });
	}
	$scope.load = function() {
	    $ionicLoading.show({
	      template: 'Loading...'
	    });
	    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
	        fs.root.getDirectory(
	            "ExampleProject",
	            {
	                create: false
	            },
	            function(dirEntry) {
	                dirEntry.getFile(
	                    "test.png", 
	                    {
	                        create: false, 
	                        exclusive: false
	                    }, 
	                    function gotFileEntry(fe) {
	                        $ionicLoading.hide();
	                        $scope.imgFile = fe.toURL();
	                    }, 
	                    function(error) {
	                        $ionicLoading.hide();
	                        console.log("Error getting file");
	                    }
	                );
	            }
	        );
	    },
	    function() {
	        $ionicLoading.hide();
	        console.log("Error requesting filesystem");
	    });
	}*/
});