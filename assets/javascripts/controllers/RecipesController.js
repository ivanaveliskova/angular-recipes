app.controller('RecipesController', ['$scope', 'getName', '$routeParams', '$filter', function($scope, getName, $routeParams, $filter) {
    getName.then(function(data) {
        $scope.recipes = data.recipes;
        $scope.recipes = $filter('orderBy')($scope.recipes, 'name');
        $scope.recipe = $scope.recipes[$routeParams.id];

        $scope.showDirections = function() {
            return $scope.recipe.hasOwnProperty('directions')
        }
    });
}]);
