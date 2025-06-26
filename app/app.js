(function () {
  "use strict";

  var app = angular
    .module("employeeApp", ["ngRoute", "ui.bootstrap", "employeeFeature"])
    .config(config);

  config.$inject = ["$routeProvider"];

  function config($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "app/features/employee-list/employee-list.html",
        controller: "EmployeeListController",
        controllerAs: "listVm",
      })
      .otherwise({
        redirectTo: "/",
      });
  }
})();
