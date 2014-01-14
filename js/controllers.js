'use strict';

/* Controllers */

wp.controller('RecentPostsCtrl', function($scope, $location, Blog) {
	$scope.getRecent = function() {

		$scope.msg = "Loading...";

		Blog.getRecentPosts().then(function(data) {
			$scope.data = data;

			if ($scope.data.posts.length < 1)
			{
				$scope.msg = "Nothing found.";
			}else{
				$scope.msg = undefined;
			}

		});
	};

	// call service
	$scope.getRecent();
});

wp.controller('PostCtrl', function($scope, $location, Blog, $sce, $routeParams) {
	$scope.getPost = function() {

		$scope.msg = "Loading...";

		Blog.getPost($routeParams.id).then(function(data) {
			$scope.post = data.post;

			// make trusted html in 1.2
			$scope.post.content = $sce.trustAsHtml(data.post.content);

			if (typeof data.post == "undefined")
			{
				$scope.msg = "Nothing found.";
			}else{
				$scope.msg = undefined;
			}
		});
	};

	// call service
	$scope.getPost();

	// make the url for addthis
	$scope.addthisUrl = "http://jasonmorita.com/stuff/angular-wp/#post/" + $routeParams.id;

	// make addthis title that gets passed into things like twitter
	$scope.addthisTitle = "WP Blog";

	// load addthis buttons 
	jQuery.getScript("http://s7.addthis.com/js/300/addthis_widget.js", function(){
		addthis.toolbox('.addthis_toolbox');
	});
});
