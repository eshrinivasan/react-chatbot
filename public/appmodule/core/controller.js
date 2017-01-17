demoapp.controller('DemoController', function( $scope, $window, $state , $sce)
	{
		$scope.transition = 'slide-left';
		$scope.tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
		$scope.currentIndex = -1;
		$scope.maxIndex = $scope.tabs.length;
		$scope.left = false;
		$scope.time = new Date();

		$scope.links = [
	          	"<a href='http://google.com'>Google</a>",
		        "<a href='http://odetocode.com'>OdeToCode</a>",
		        "<a href='http://twitter.com'>Twitter</a>"
	    ];

	     for (var i = 0; i < $scope.links.length; i++) {
	        $scope.links[i] = $sce.trustAsHtml($scope.links[i]);
	    }

		next();

		function next()
		{
			$scope.currentIndex = $scope.currentIndex+1 < $scope.maxIndex ? $scope.currentIndex+1 : 0;
			var name = $scope.tabs[$scope.currentIndex];
			$state.go( name );
		}

		$scope.left = function()
		{
			$scope.transition = 'slide-left';
			next();
		};

		$scope.right = function()
		{
			$scope.transition = 'slide-right';
			next();
		};

		$scope.top = function()
		{
			$scope.transition = 'slide-top';
			next();
		};

		$scope.bottom = function()
		{
			$scope.transition = 'slide-bottom';
			next();
		};
});