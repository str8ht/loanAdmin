/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.models', [
      'BlurAdmin.pages.models.Decision-Tree',
      'BlurAdmin.pages.models.Gaussian-NB',
      'BlurAdmin.pages.models.Random-Forest',
      'BlurAdmin.pages.models.majority-vote'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('models', {
          url: '/models',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Models',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();
