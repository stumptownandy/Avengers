angular.module('Avengers').controller('mainController', ['$scope', 'dataService', function($scope, dataService){
   
   $scope.heroes = [];
   
   $scope.getDemHeroes = function() {
       $scope.heroes = dataService.heroSender();
       console.log($scope.heroes)
   };
   $scope.getDemHeroes();
}]);