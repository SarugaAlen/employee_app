(function () {
  "use strict";
  angular.module("employeeFeature").component("customPopup", {
    templateUrl: "app/shared/custom-popup/custom-popup.component.html",
    controller: CustomPopupController,
    controllerAs: "popupVm",
    bindings: {
      title: "@",
      onClose: "&",
      onPrimaryAction: "&?",
      showPrimaryActionButton: "<?",
      primaryActionLabel: "@?",
      primaryActionClass: "@?",
    },
    transclude: true,
  });

  function CustomPopupController() {
    var popupVm = this;
  }
})();
