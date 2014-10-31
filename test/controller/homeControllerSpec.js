describe("HomeController", function () {

    beforeEach(module("CMonApp"));

    describe("initialization", function () {
        it("should get the articles", function () {
            var fakeArticleService = {
                get: function(options, callback) {
                    callback([1, 2, 3, 4, 5]);
                }
            };

            createController(function (controller, scope) {
                expect(scope.articles.length).toBe(5);
            }, {ArticleService: fakeArticleService});
        });
    });

    function createController(callback, dependencies) {
        inject(function ($controller, $rootScope) {
            var scope = $rootScope.$new();
            dependencies.$scope = scope;
            var controller = $controller("HomeController", dependencies);
            callback(controller, scope);
        })
    }
});