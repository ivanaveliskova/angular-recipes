app.controller('AboutController', ['$scope', '$window', function($scope, $window) {
    $window.localStorage.removeItem('defaultTab');
}]);
