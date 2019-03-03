/**
 * @author a.demeshko
 * created on 12/18/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.models.majority-vote', [])
    .config(routeConfig).config(function(baConfigProvider){
      var layoutColors = baConfigProvider.colors;
      Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
      Morris.Donut.prototype.defaults.labelColor = layoutColors.defaultText;
      Morris.Grid.prototype.gridDefaults.gridLineColor = layoutColors.borderDark;
      Morris.Grid.prototype.gridDefaults.gridTextColor = layoutColors.defaultText;
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('models.majority-vote', {
          url: '/majority-vote',
          templateUrl: 'app/pages/models/majority-vote/morris.html',
          title: 'Majority-Vote',
          sidebarMeta: {
            order: 300,
          }
        });
  }

})();