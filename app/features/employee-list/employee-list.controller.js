(function () {
  "use strict";

  angular.module("employeeFeature").controller("EmployeeListController", EmployeeListController);

  EmployeeListController.$inject = ["EmployeeFactory"]; 
  
  function EmployeeListController(EmployeeFactory) {
    var listVm = this;

    listVm.employees = [];
    listVm.loading = true;

    listVm.selectedEmployeeId = null;

    listVm.selectedEmployee = function (employee) {
      if (!employee || !employee.id) {
        console.log("No employee or employee id");
        return;
      }
      listVm.selectedEmployeeId = employee.id;
    };

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
