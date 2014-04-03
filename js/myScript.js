function ListCtrl($scope) {
	$scope.people = [
		{name: "Shaker", age:27},
		{name: "Ibrahim", age:29},
		{name: "Amad", age:31},
		{name: "Hareth", age:27},
		{name: "Ramadan", age:27},
		{name: "Khaled", age:22}
	];

	$scope.add = function() {
		$scope.people.push({
			name: $scope.newName,
			age: $scope.newAge
		});
		$scope.newName = "";
		$scope.newAge = "";
	};
}