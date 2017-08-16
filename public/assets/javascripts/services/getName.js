app.factory('getName', ['$http', function($http) {
    return $http({
        method: 'GET',
        url: '/api/name'
        }).then(function(success) {
            return success.data;
        }, function(err) {
            return err;
        });
}])
