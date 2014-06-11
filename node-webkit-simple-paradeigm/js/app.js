(function() {
  'use strict';
  angular.module('basicTemplate', [])

  .controller('BookController', function() {
    this.books = [{ title: "test1" }, { title: "test2" }];
  })

  .directive('bookForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/book-form.html',
      controller: function() {
        this.showForm = false;
        this.book = {};
        this.addBook = function(form) {
          this.book = {};
          this.showForm = false;
          form.$setPristine();
        }
      },
      controllerAs: 'bookFormCtrl'
    }
  })
})();
