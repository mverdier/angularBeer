app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	var result;

	$scope.search = function() {

		if (document.getElementById('titles').style.display != "none") {
			$('#titles').slideToggle('slow');
			$('#dontworry').slideToggle('slow');
		}

		document.getElementById('submit').disable = true;
		document.getElementById('loading').style.display = "block";
		document.getElementById('results').style.display = "none";
		document.getElementById('empty-list').style.display = "none";
		document.getElementById('error').style.display = "none";

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
			url: 'http://beer.martin-verdier.com/api/get' + params
		}).then(function successCallback(response) {
			document.getElementById('loading').style.display = "none";
			document.getElementById('submit').disable = false;

			if (response.data.length === 0) {
				document.getElementById('empty-list').style.display = "block";
			} else {
				result = response.data;
				document.getElementById('results').style.display = "block";
			}

		}, function errorCallback(response) {
			document.getElementById('loading').style.display = "none";
			document.getElementById('submit').disable = false;
			document.getElementById('error').style.display = "block";
		});

		$scope.results = result;
	};
}]);