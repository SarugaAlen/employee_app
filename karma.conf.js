module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      "node_modules/angular/angular.min.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "app/features/employee-list/employee-list.module.js",
      "app/features/employee-list/employee-list.factory.js",
      "test/unit/**/*.spec.js",
    ],
    exclude: ["app/app.js"],
    preprocessors: {},
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Firefox"],
    singleRun: false,
    concurrency: Infinity,
  });
};
