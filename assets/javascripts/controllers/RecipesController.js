app.controller('RecipesController', ['$scope', 'getName', '$routeParams', function($scope, getName, $routeParams) {
    getName.then(function(data) {
        $scope.recipe = data.recipes[$routeParams.id];

        $scope.showDirections = function() {
            return $scope.recipe.hasOwnProperty('directions')
        }
    });
}]);
