var app = angular.module('App', []);
var arr = app_data.price_filters;
    newArr = [];


app.controller('MainCtrl', function($scope) {
    $scope.app_data = arr;


    
    $scope.getMxRange = function () {

        /*$scope.mins = $scope.minVal;
        $scope.maxs = $scope.minVal;
        console.log($scope.minVal);*/

        var priceArr = [];
        if ($scope.minVal) {
            angular.forEach($scope.maxVal, function (maxVal) {
                if ($scope.minVal < maxVal) {
                    $scope.maxVal = "Shit";
                }
            });
        }
    };
});
