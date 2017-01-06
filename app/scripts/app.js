'use strict';

angular
  .module('app', [
    'ngRoute',
    'ui.router',
    'ngResource'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('contact-list', {
      url: '/',
      templateUrl: 'views/contact-list.html',
      controller: 'ListeContactCtrl',
      controllerAs: 'vm'
    })

    .state('contact-list.groupe', {
      url: 'groupe/:id',
    })

    .state('contact-add', {
      url: '/contact',
      templateUrl: 'views/contact-add.html',
      controller: 'ContactCtrl',
      controllerAs: 'vm'
    })

    .state('contact-add.editer', {
      url: '/:id'
    })


  $urlRouterProvider.otherwise('/');

  });
