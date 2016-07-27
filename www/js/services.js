angular.module('app.services', [ ])

.factory('BlankFactory', [function(){

}])

.service('BlobService', ['$http', function($http){
	return{
		getBlobs: function(){
			this.dummies= [];
			var httpData = this.dummies;

			$http.get('/js/dummy.json').success(function(data){
				data.entries.forEach(function (elem, index) {
					httpData.push(elem);
				})
			})
			.error(function(data){
				console.log("Error loading blobs from file. Got following: " + data);
			});
			return this.dummies;
		},
		addnewBlob: function(newBlob){

		}
	};
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
