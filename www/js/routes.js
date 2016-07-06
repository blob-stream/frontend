angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('pickAName', {
    url: '/pickAName',
    templateUrl: 'templates/pickAName.html',
    controller: 'pickANameCtrl',
    controllerAs: 'nameCtrl'
  })

  .state('menu.blobStream', {
    url: '/stream',
    views: {
      'menu': {
        templateUrl: 'templates/blobStream.html',
        controller: 'blobStreamCtrl',
        controllerAs: 'streamCtrl'
      }
    }
  })

  .state('menu.addABlob', {
    url: '/addABlob',
    views: {
      'menu': {
        templateUrl: 'templates/addABlob.html',
        controller: 'addABlobCtrl',
        controllerAs: 'addCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/pickAName')


});