(function () {
  "use strict";
  angular.module("employeeFeature").directive("longPress", LongPressDirective);

  LongPressDirective.$inject = ["$timeout"];

  function LongPressDirective($timeout) {
    var directive = {
      restrict: "A",
      link: linkFunction,
    };

    return directive;

    function linkFunction(scope, element, attrs) {
      var longPressTimeout;
      var pressDuration = 500;

      function startTimer() {
        $timeout.cancel(longPressTimeout);

        longPressTimeout = $timeout(function () {
          console.log("Long press na elementu ->", element[0]);
        }, pressDuration);
      }

      function cancelTimer() {
        $timeout.cancel(longPressTimeout);
      }

      element.on("mousedown", startTimer);
      element.on("mouseup", cancelTimer);
      element.on("mouseleave", cancelTimer);

      scope.$on("$destroy", function () {
        element.off("mousedown", startTimer);
        element.off("mouseup", cancelTimer);
        element.off("mouseleave", cancelTimer);
        $timeout.cancel(longPressTimeout);
      });
    }
  }
})();
