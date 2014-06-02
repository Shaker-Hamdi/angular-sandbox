var app = angular.module('App', []);

app.controller('MainController', function ($scope) {
    $scope.mins = [100, 200, 300, 400];
    $scope.maxs = [200, 300, 400, 500];
    
    $scope.getMxRange = function () {
        var arr = [];
        if ($scope.minVal) {
            angular.forEach($scope.maxs, function (maxVal) {
                if ($scope.minVal < maxVal) {
                    this.push(maxVal);
                }
            }, arr);
        }
        else {
            arr = $scope.maxs;
        }
        return arr;
    };
});


/*app.controller('MainController', ['$scope', function ($scope) {
    $scope.mins = [100, 200, 300, 400];
    $scope.maxs = [200, 300, 400, 500];
    
    $scope.getMxRange = function () {
        var arr = [];
        if ($scope.minVal) {
            angular.forEach($scope.maxs, function (maxVal) {
                if ($scope.minVal < maxVal) {
                    this.push(maxVal);
                }
            }, arr);
        }
        else {
            arr = $scope.maxs;
        }
        return arr;
    };
}] );*/