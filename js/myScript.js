var app = angular.module('testApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.items = app_data.locations;
});


//console.log(app_data);


/*var app = angular.module('testApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.items = [
    {name:'item1'},
    {name:'item2', subItems: [
      {name:'sub item 1'},
      {name:'sub item 2', subItems: [
      	{name:'sub sub item 1'},
      	{name:'sub sub item 2'}
      	]}
      ]}
    ];
});*/


/*var app = angular.module('testApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.selectedItem = [];
  $scope.items = [
    {name:'item1'},
    {name:'item2', subItems: [
      {name:'sub item 1'},
      {name:'sub item 2', subItems: [
        {name:'sub sub item 1'},
        {name:'sub sub item 2'}
        ]}
      ]}
    ];
    $scope.choiceValue = function(){
        if (!$scope.selectedItem.length) return ''; //no choice
        //check for sub choices, if any
        for (var i=$scope.selectedItem.length-1; i>0; i--){
             if ($scope.selectedItem[i-1].subItems)
                 return $scope.selectedItem[i].name;
        }
        return $scope.selectedItem[0].name; //if only the first level was chosen, return its name
    }

        
    
});*/


