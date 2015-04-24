(function() {
	var app = angular.module('music', []);
    

	app.controller('MusicianController', ['$scope', function($scope) {
		$scope.name = $scope.genre = $scope.instrument = $scope.age = '';
        $scope.likes = 0;
		
        
        $scope.all = function() {
            $.getJSON('getMusician', function(result) {
                $scope.$apply(function () {
                    $scope.musicians = result;
                });
            });
        };

        
		$scope.add = function() {
			var newMusician = {
				"name" : $scope.name,
				"genre" : $scope.genre,
				"instrument" : $scope.instrument,
                "age": $scope.age,
                "likes": $scope.likes
			};
			$scope.musicians.push(newMusician);
			$.post('putMusician', newMusician);
		  $scope.name = $scope.genre = $scope.instrument = $scope.age = '';
            $scope.likes = 0;
		};
		
		$scope.remove = function(musician) {
			$scope.musicians.splice($scope.musicians.indexOf(musician), 1);
			$.post('removeMusician', musician);
		};
        
        $scope.plusOne = function(musician) {
            $scope.likes += 1;
        };
        
	}]);
}());
