app.controller('HomeController', ['$scope', '$filter', 'getName', function($scope, $filter, getName) {

    $scope.getFirstLetter = function(word) {
        return word.charAt(0);
    }

    $scope.firstLetters = [];

    getName.then(function(data) {
        $scope.recipes = data.recipes;
        $scope.recipes = $filter('orderBy')($scope.recipes, 'name');

        angular.forEach($scope.recipes, function(value, key) {
            $scope.firstLetters[key] = { letter: $scope.getFirstLetter(value.name)};
        });

        $scope.tab = $scope.firstLetters[0].letter;

    });
        $scope.setTab = function(letter) {
            $scope.tab = letter;
        };

        $scope.getTab = function(letter) {
            return $scope.tab === letter;
        };
}]);
