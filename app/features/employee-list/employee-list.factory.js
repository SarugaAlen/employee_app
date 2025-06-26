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

      factory.deleteEmployee = function (employeeId) {
        return $http
          .delete("https://jsonplaceholder.typicode.com/users/" + employeeId)
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.error("Error deleting employee:", error);
            throw error;
          });
      };
      return factory;
    },
  ]);
})();
