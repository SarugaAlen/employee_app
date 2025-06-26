(function () {
  "use strict";

  var app = angular.module("employeeApp", [
    "ngRoute",
    "ui.bootstrap",
    "employeeFeature",
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "app/features/employee-list/employee-list.html",
        controller: "EmployeeListController",
        controllerAs: "listVm",
      })
      .otherwise({
        redirectTo: "/",
      });
  });
})();
