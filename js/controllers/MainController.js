app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	var result;

	$scope.search = function() {

		if (document.getElementById('titles').style.display != "none") {
			$('#titles').slideToggle('slow');
			$('#dontworry').slideToggle('slow');
		}

		var params = "";

		if ($scope.name !== undefined) {
			params += "?name=" + $scope.name;
		}

		if ($scope.brand !== undefined) {

			if (params !== "") {
				params += "&";
			} else {
				params += "?";
			}

			params += "brand=" + $scope.brand;
		}

		if ($scope.country !== undefined) {

			if (params !== "") {
				params += "&";
			} else {
				params += "?";
			}

			params += "country=" + $scope.country;
		}

		if ($scope.taste !== undefined) {

			if (params !== "") {
				params += "&";
			} else {
				params += "?";
			}

			params += "taste=" + $scope.taste;
		}

		if ($scope.flavor !== undefined) {

			if (params !== "") {
				params += "&";
			} else {
				params += "?";
			}

			params += "flavor=" + $scope.flavor;
		}

		if ($scope.color !== undefined) {

			if (params !== "") {
				params += "&";
			} else {
				params += "?";
			}

			params += "color=" + $scope.color;
		}

		$http({
			method: 'GET',
			url: 'http://localhost:3000/api/get' + params
		}).then(function successCallback(response) {
			
		}, function errorCallback(response) {
			
		});

		$scope.results = result;
	};
}]);