app.controller('HomeController', ['$scope', '$filter', 'getName', function($scope, $filter, getName) {

    $scope.getFirstLetter = function(word) {
        return word.charAt(0);
    }

    getName.then(function(data) {
        $scope.recipes = data.recipes;
        $scope.recipes = $filter('orderBy')($scope.recipes, 'name');
    });

}]);
