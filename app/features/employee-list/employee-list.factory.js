(function () {
  "use strict";

  angular.module("employeeFeature").factory("EmployeeFactory", [
    "$http",
    function ($http) {
      var factory = {};
      factory.getEmployees = function () {
        return $http
          .get("https://jsonplaceholder.typicode.com/users")
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.error("Error fetching employees:", error);
            throw error;
          });
      };

      return factory;
    },
  ]);
})();
