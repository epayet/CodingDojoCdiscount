var app = angular.module("CMonApp", [
    "CMesControllers",
    "CMesServices",
    "ngRoute",
    "ngResource"
]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/home", {templateUrl: "partials/home.html", controller: "HomeController"});
    $routeProvider.when("/article/:id", {templateUrl: "partials/article.html", controller: "ArticleController"});
    $routeProvider.otherwise({redirectTo: "/home"});
}]);

angular.module("CMesControllers", []);
angular.module("CMesServices", []);


