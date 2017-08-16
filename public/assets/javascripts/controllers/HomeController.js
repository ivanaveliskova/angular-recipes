app.controller('HomeController', ['$scope', 'getName', function($scope, getName) {

    getName.then(function(data) {
        $scope.recipes = data.recipes;
    });
}]);
