var app = angular.module('RecipeApp', ['ngRoute', 'angular.filter']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'HomeController',
        templateUrl: 'templates/home.html'
    })
    .when('/about', {
        templateUrl: 'templates/about.html'
    })
    .when('/recipes/:id', {
        controller: 'RecipesController',
        templateUrl: 'templates/recipe.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});

app.filter('spaceCase', function() {
    return function(input) {
        input = input || '';
        return input.replace(/_/g, ' ');
    }
});

app.controller('AboutController', ['$scope', function($scope) {

}]);

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

app.controller('RecipesController', ['$scope', 'getName', '$routeParams', function($scope, getName, $routeParams) {
    getName.then(function(data) {
        $scope.recipe = data.recipes[$routeParams.id];

        $scope.showDirections = function() {
            return $scope.recipe.hasOwnProperty('directions')
        }
    });
}]);

app.factory('getName', ['$http', function($http) {
    return $http({
        method: 'GET',
        url: '/api/name'
        }).then(function(success) {
            return success.data;
        }, function(err) {
            return err;
        });
}]);
