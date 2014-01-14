'use strict';

/* Services */

wp.factory('Blog', function($http) {
    var Blog = {
        endpoint: 'http://jasonmorita.com/api',

        getRecentPosts: function() {
            return this.makeCall(this.endpoint + '/get_recent_posts/?callback=JSON_CALLBACK');
        },

        getPost: function(id) {
            return this.makeCall(this.endpoint + '/get_post/?id='+id+'&callback=JSON_CALLBACK');
        },

        makeCall: function(url){
            return $http.jsonp(url).then(function(response){
                return response.data;
            });            
        }
    };
    return Blog;
});