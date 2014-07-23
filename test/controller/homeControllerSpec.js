describe("homeController", function () {
    var controller, scope;

    beforeEach(module("CMonApp"));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller("HomeController", {'$scope': scope});
    }));

    describe("initialization", function () {
        it("should be defined", function () {
            expect(controller).toBeDefined();
        });

        it("should have some articles", function () {
            //TODO $httpBackend
            expect(scope.articles).toBeDefined()
        });
    });

});