angular.module("CMesServices").factory("ArticleService",
    function (Article) {
        return {
            get: function(options, callback) {
                Article.query(options, callback);
            }
        };
    });