app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	var result = [{
		"name": "Liefmans Fruitesse",
		"brand": "Liefmans",
		"abv": 3.8,
		"color": "red",
		"flavor": "fruit",
		"country": "BE",
		"countryLong": "Belgium",
		"taste": "sugar",
		"picture": "resource/beer/liefmans_fruitesse.png",
		"description": "Sipping a Liefmans Fruitesse on the rocks is like taking a city break in Berlin, soaking up the atmosphere in Milan or discovering culture in New York. Take your time to enjoy it in a friendly bar, or chilling out with your friends."
	},

	{
		"name": "Liefmans Fruitesse",
		"brand": "Liefmans",
		"abv": 3.8,
		"color": "red",
		"flavor": "fruit",
		"country": "BE",
		"countryLong": "Belgium",
		"taste": "sugar",
		"picture": "resource/beer/liefmans_fruitesse.png",
		"description": "This is a description"
	},

	{
		"name": "Liefmans Fruitesse",
		"brand": "Liefmans",
		"abv": 3.8,
		"color": "red",
		"flavor": "fruit",
		"country": "BE",
		"countryLong": "Belgium",
		"taste": "sugar",
		"picture": "resource/beer/liefmans_fruitesse.png",
		"description": "Sipping a Liefmans Fruitesse on the rocks is like taking a city break in Berlin, soaking up the atmosphere in Milan or discovering culture in New York. Take your time to enjoy it in a friendly bar, or chilling out with your friends."
	},

	{
		"name": "Liefmans Fruitesse",
		"brand": "Liefmans",
		"abv": 3.8,
		"color": "red",
		"flavor": "fruit",
		"country": "BE",
		"countryLong": "Belgium",
		"taste": "sugar",
		"picture": "resource/beer/liefmans_fruitesse.png",
		"description": "Sipping a Liefmans Fruitesse on the rocks is like taking a city break in Berlin, soaking up the atmosphere in Milan or discovering culture in New York. Take your time to enjoy it in a friendly bar, or chilling out with your friends."
	},

	{
		"name": "Liefmans Fruitesse",
		"brand": "Liefmans",
		"abv": 3.8,
		"color": "red",
		"flavor": "fruit",
		"country": "BE",
		"countryLong": "Belgium",
		"taste": "sugar",
		"picture": "resource/beer/liefmans_fruitesse.png",
		"description": "Sipping a Liefmans Fruitesse on the rocks is like taking a city break in Berlin, soaking up the atmosphere in Milan or discovering culture in New York. Take your time to enjoy it in a friendly bar, or chilling out with your friends."
	},

	{
		"name": "Liefmans Fruitesse",
		"brand": "Liefmans",
		"abv": 3.8,
		"color": "red",
		"flavor": "fruit",
		"country": "BE",
		"countryLong": "Belgium",
		"taste": "sugar",
		"picture": "resource/beer/liefmans_fruitesse.png",
		"description": "Sipping a Liefmans Fruitesse on the rocks is like taking a city break in Berlin, soaking up the atmosphere in Milan or discovering culture in New York. Take your time to enjoy it in a friendly bar, or chilling out with your friends."
	}];

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

		console.log("http://url.com/get" + params)

		$scope.results = result;
	};
}]);