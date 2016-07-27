angular.module('app.services', [ ])

.factory('BlankFactory', [function(){

}])

.factory('BlobService', ['$http', function($http){
	var service = {
		blobs : [],
		getBlobs: function(){
			this.dummies= [];
			var httpData = this.dummies;

			$http.get('/js/dummy.json').success(function(data){
				data.entries.forEach(function (elem, index) {
					httpData.push(elem);
				})
				angular.copy(httpData, service.blobs);
			})
			.error(function(data){
				console.log("Error loading blobs from file. Got following: " + data);
			});
			return this.dummies;
		},
		addNewBlob: function(newBlob){

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
