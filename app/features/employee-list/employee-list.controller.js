(function () {
  "use strict";

  angular.module("employeeFeature").controller("EmployeeListController", EmployeeListController);

  EmployeeListController.$inject = ["EmployeeFactory"]; 
  
  function EmployeeListController(EmployeeFactory) {
    var listVm = this;

    listVm.employees = [];
    listVm.loading = true;

    function init() {
      listVm.loading = true;
      EmployeeFactory.getEmployees()
        .then(function (data) {
          listVm.employees = data;
        })
        .catch(function (error) {
          console.error("Error fetching employees:", error);
        })
        .finally(function () {
          listVm.loading = false;
        });
    }

    init();
  }
})();
