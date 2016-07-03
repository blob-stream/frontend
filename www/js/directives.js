angular.module('app.directives', [])

/*.directive('blankDirective', [function(){

}]);*/

.directive('streamBlob', [function(){
	return{
		restrict: 'E',
		templateUrl: '../templates/blob.html',
		controller: 'blobStreamCtrl'
	};
}]);