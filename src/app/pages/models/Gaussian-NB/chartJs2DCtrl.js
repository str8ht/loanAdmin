/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.models.Gaussian-NB')
    .controller('chartJs2DCtrl', chartJs2DCtrl);

  /** @ngInject */
  function chartJs2DCtrl($scope) {
    $scope.labels =["Q1", "Q2", "Q3", "Q4"];
    $scope.data = [
      [1741781700, 2080429200, 2063142975, 2050909275],
      [1437969475, 1538432075, 1791201400, 1817354125]
    ];
    $scope.series = ['2018', '2017'];
	$scope.label = "Dollars";

    $scope.changeData = function () {
      $scope.data[0] = shuffle($scope.data[0]);
      $scope.data[1] = shuffle($scope.data[1]);
    };

    /*function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
	*/
  }

})();