/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.models.Random-Forest', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('models.Random-Forest', {
          url: '/Random-Forest',
          templateUrl: 'app/pages/models/Random-Forest/chartist.html',
          title: 'Random-Forest',
          sidebarMeta: {
            order: 100,
          },
        });
  }

})();