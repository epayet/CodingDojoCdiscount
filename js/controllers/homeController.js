angular.module("CMesControllers").controller("HomeController", ['$scope', 'Article',
    function($scope, Article) {
        $scope.articles = Article.query();
    }
]);