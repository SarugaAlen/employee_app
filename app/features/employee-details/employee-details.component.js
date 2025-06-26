(function () {
  "use strict";
  angular.module("employeeFeature").component("employeeDetails", {
    templateUrl:
      "app/features/employee-details/employee-details.component.html",
    controller: EmployeeDetailsController,
    controllerAs: "detailsVm",
    bindings: {
      employee: "<",
    },
  });

  function EmployeeDetailsController() {
    var detailsVm = this;

    detailsVm.$onInit = function () {
      if (!detailsVm.employee) {
        console.error("Employee data not provided");
      }
      console.log("Employee Details Init", detailsVm.employee);
    };

    detailsVm.$onChanges = function (changes) {
      if (changes.employee && changes.employee.currentValue) {
        console.log("Employee data changed:", changes.employee.currentValue);
      }
    };
  }
})();
