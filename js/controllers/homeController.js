angular.module("CMesControllers").controller("HomeController", ['$scope', 'ArticleService',
    function($scope, ArticleService) {
        ArticleService.get({from: 0, to: 5}, function(articles) {
            $scope.articles = articles;
        });
    }
]);