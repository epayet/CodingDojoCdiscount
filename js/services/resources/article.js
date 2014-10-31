angular.module("CMesServices").factory("Article", ["$resource",
    function($resource) {
        return $resource("data/articles.json");
    }
]);