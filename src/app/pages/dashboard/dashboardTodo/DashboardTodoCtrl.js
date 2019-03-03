/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardTodoCtrl', DashboardTodoCtrl);

  /** @ngInject */
  function DashboardTodoCtrl($scope, baConfig) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    $scope.todoList = [
      { text: 'Finish Random Forest Classifier' },
      { text: 'Provide performance metric/confusion matrix for RF' },
      { text: 'Finish KNN model' },
      { text: 'Provide performance metric/confusion matrix for KNN' },
      { text: 'Train and tune the Decision-Tree' },
      { text: 'Provide performance metric/confusion matrix for DT' },
      { text: 'Finish Gaussian Naive Bayes Classifier' },
      { text: 'Provide performance metric/confusion matrix for Gaussian NB' },
      { text: 'Finish Front-End element work on the dashboard' },
      { text: 'Integrate Models into the dashboard app' },
    ];

    $scope.todoList.forEach(function(item) {
      item.color = getRandomColor();
    });

    $scope.newTodoText = '';

    $scope.addToDoItem = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        $scope.todoList.unshift({
          text: $scope.newTodoText,
          color: getRandomColor(),
        });
        $scope.newTodoText = '';
      }
    };
  }
})();