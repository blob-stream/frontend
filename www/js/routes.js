angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.blobStream', {
    url: '/stream',
    views: {
      'tab1': {
        templateUrl: 'templates/blobStream.html',
        controller: 'blobStreamCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('pickAName', {
    url: '/start',
    templateUrl: 'templates/pickAName.html',
    controller: 'pickANameCtrl'
  })

  .state('addABlob', {
    url: '/page6',
    templateUrl: 'templates/addABlob.html',
    controller: 'addABlobCtrl'
  })

$urlRouterProvider.otherwise('/start')

  

});