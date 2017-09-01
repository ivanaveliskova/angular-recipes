app.controller('HomeController', ['$scope', '$filter', 'getName', '$window', function($scope, $filter, getName, $window) {

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

        $scope.tab = $window.localStorage.getItem('defaultTab');

        if ($scope.tab == null) { $scope.tab = $scope.firstLetters[0].letter; }

    });
        $scope.setTab = function(letter) {
            $scope.tab = letter;
            $window.localStorage.setItem('defaultTab', letter);
        };

        $scope.getTab = function(letter) {
            return $scope.tab === letter;
        };
}]);
