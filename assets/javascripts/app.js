var app = angular.module('RecipeApp', ['ngRoute']);

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

app.controller('TabController', function() {
    this.tab = 1;

    this.setTab = function(index) {
        this.tab = index;
    };

    this.getTab = function(index) {
        return this.tab === index;
    };
});
