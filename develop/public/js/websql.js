var db = openDatabase('mydb', '1.0', 'Test DB', 10 * 1024 * 1024);
var books = [];

db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title VARCHAR(50))');
});


$("#import").on("click", function() {
  db.transaction(function (tx) {
    tx.executeSql('INSERT INTO books (id, title) VALUES (1, "Rails 4 Way")');
    tx.executeSql('INSERT INTO books (id, title) VALUES (2, "Unity by example")');
  });
});

$("#export").on("click", function() {

});

$("#clean_data").on("click", function() {
  db.transaction(function (tx) {
    tx.executeSql('DROP TABLE books');
  });
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS books (id unique, title)');
  });
});

function bookToJson() {
  db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM books;', [], function(ty, results) {
      for(i = 0; i < results.rows.length; i++) {
        books.push({id: results.rows.item(i).id, title: results.rows.item(i).title});
      }
    });
  });
  return books;
}