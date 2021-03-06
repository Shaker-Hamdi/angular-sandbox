var app = angular.module('App', []);

var arr = app_data.price_filters;
forSaleArr = [];
forRentArr = [];

for ($i = 0; $i < arr.length; $i++) {

    if (arr[$i]['section'] === 2) {
        forRentArr.push(arr[$i]['value']);
    } else if (arr[$i]['section'] === 1) {
        forSaleArr.push(arr[$i]['value']);
    }
}



app.controller('MainCtrl', function ($scope) {
    $scope.mins = forSaleArr;
    $scope.maxs = forSaleArr;

    $scope.getMxRange = function () {
        var arr = [];
        if ($scope.minVal) {
            angular.forEach($scope.maxs, function (maxVal) {
                if ($scope.minVal <= maxVal) {
                    this.push(maxVal);
                }
            }, arr);
        } else {
            arr = $scope.maxs;
        }
        return arr;
    };
    
    $scope.sectionChanged = function() {
        if ($scope.selectedSection === '1') {
            $scope.mins = forSaleArr;
            $scope.maxs = forSaleArr;
        } else if ($scope.selectedSection === '2') {
            $scope.mins = forRentArr;
            $scope.maxs = forRentArr;
        }
    };
});























/*var app = angular.module('App', []);

var arr = app_data.price_filters;
    minimum = [];
    maximum = [];

for($i=0; $i < arr.length; $i++){

    if(arr[$i]['section'] === 2) {
        minimum.push(arr[$i]['value']);
    } else if(arr[$i]['section'] === 1) {
        maximum.push(arr[$i]['value']);
    }
}

console.log(minimum);
console.log(maximum);



app.controller('MainController', function ($scope) {
    $scope.mins = minimum;
    $scope.maxs = maximum;
    
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
});*/




/*var app = angular.module('App', []);

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
});*/


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