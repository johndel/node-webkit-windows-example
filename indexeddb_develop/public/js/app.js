(function() {
  'use strict';
  var basic_app = angular.module('basicTemplate', ['ngRoute']);
  basic_app.controller('BookController', function() {
    this.books = [];
  });

  basic_app.directive('bookForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/book-form.html',
      controller: function() {
        this.showForm = false;
        this.book = {};
        this.addBook = function(form) {
        var tmp_book = this.book.title;
        this.book = {};
        this.showForm = false;
        form.$setPristine();
        }
      },
      controllerAs: 'bookFormCtrl'
    }
  });

  basic_app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/index.html'
      })
      .when('/about', {
        templateUrl: 'partials/about.html'
      })
      .when('/import', {
        templateUrl: 'partials/import.html'
      })
      .when('/export', {
        templateUrl: 'partials/export.html'
      })
      .when('/clean', {
        templateUrl: 'partials/clean.html'
      });
  }]);
})();
