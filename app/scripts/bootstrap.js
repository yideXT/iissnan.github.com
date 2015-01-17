mainModule.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                controller: "ProfileCtrl",
                templateUrl: "/views/profile.html"
            })
            .when("/lab", {
                controller: "LabCtrl",
                templateUrl: "/views/lab.html"
            })
            .when("/read", {
                controller: "ReadCtrl",
                templateUrl: "/views/read.html"
            })
            .when("/device", {
                controller: "DeviceCtrl",
                templateUrl: "/views/device.html"
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.hashPrefix("!");
    })
    .run(function () {
        $(".loading").hide();
    });

// Bootstrap the application.
$(document).ready(function () {
    angular.bootstrap(document, [APP_NAME]);
});