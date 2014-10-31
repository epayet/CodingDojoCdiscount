describe("ArticleService", function () {
    beforeEach(module("CMonApp"));

    describe("get", function() {
        it("should return ervery articles", function (done) {
            var expectedArticles = [1];
            var fakeArticle = {
                query: function (callback) {
                    callback(expectedArticles);
                }
            };

            createService(function (ArticleService) {
                ArticleService.get(null, function (articles) {
                    expect(articles.length).toBe(1);
                    done();
                }, {Article: fakeArticle});
            });
        });
    });

    function createService(callback, dependencies) {
        module(function ($provide) {
            for(var dependency in dependencies) {
                $provide.value(dependency, dependencies[dependency]);
            }

            inject(function (ArticleService) {
                callback(ArticleService);
            });
        });
    }
});