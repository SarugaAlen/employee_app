(function () {
  "use strict";

  angular.module("employeeFeature").controller("EmployeeListController", EmployeeListController);

  EmployeeListController.$inject = ["EmployeeFactory"]; 
  
  function EmployeeListController(EmployeeFactory) {
    var listVm = this;

    listVm.employees = [];
    listVm.loading = true;
    listVm.selectedEmployeeId = null;
    listVm.selectedEmployeeData = null;
    listVm.showDetailsPopup = false; 

    listVm.showDetails = function (employee) {
      if (!employee || !employee.id) {
        console.log("No employee or employee id");
        closeDetailsPopup();
        return;
      }
      listVm.selectedEmployeeId = employee.id;
      listVm.selectedEmployeeData = employee;
      listVm.showDetailsPopup = true;
    };

    listVm.closeDetailsPopup = function () {
        listVm.showDetailsPopup = false;
        listVm.selectedEmployeeId = null;
        listVm.selectedEmployeeData = null;
        console.log("Custom popup closed.");
    };

    listVm.deleteEmployee = function (employee) {
      if (confirm('Are you sure you want to delete this employee?')) {
       
      }
    }

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
