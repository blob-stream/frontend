angular.module('app.services', [ ])

.factory('BlankFactory', [function(){

}])

/*.service('BlobService', ['$http', function($http){
	var stream = this;
	stream.blobs = [ ];

	$http.get('/dummy.json')
		.success(function(data){
			stream.blobs = data;
		})
		.error(function)(data){
			console.log("Error loading blobs from file. Got following: " + data);
		};
}])*/

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
