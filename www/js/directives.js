angular.module('app.directives', [])

//nicer code, for using <stream-blob></stream-blob>
.directive('streamBlob', [function(){
	return{
		restrict: 'E',
		templateUrl: '../templates/blob.html',
		controller: 'blobStreamCtrl'
	};
}]);