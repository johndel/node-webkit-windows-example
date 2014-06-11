(function() {
  'use strict';
  var basic_app = angular.module('basicTemplate', ['ngRoute']);
  basic_app.controller('BookController', function() {
    bookToJson();
    this.books = books;
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
        db.transaction(function (tx) {
          tx.executeSql('SELECT MAX(id) as id FROM books;', [], function(ty, results) {
            var new_id = parseInt(results.rows.item(0).id) + 1;
            tx.executeSql('INSERT INTO books (id, title) VALUES (' + new_id + ', "' + tmp_book + '")');
            books.push({id: new_id, title: tmp_book});
          });
        });
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
