var db = WebSQL('mydb');
var books = [];

db.rawTx(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title VARCHAR(50))');
});

$("#export").on("click", function() {

});

$("#clean_data").on("click", function() {
  db.query(
    'DROP TABLE books',
    'CREATE TABLE IF NOT EXISTS books (id unique, title)'
  ).done(function() {
    alert("Database data wiped out.");
  });
});

function bookToJson() {
  db.query('SELECT * FROM books').done(function(results) {
    for(i = 0; i < results.length; i++) {
      books.push({id: results[i].id, title: results[i].title});
    }
  });
  return books;
}

function stringifyJson(json) {
  var returned_objects = JSON.stringify(json);
  return returned_objects;
}

function stringifyBooks() {
  var returned_objects = "[";
  db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM books;', [], function(ty, results) {
      for(i = 0; i < results.rows.length; i++) {

        console.log(returned_objects);
        returned_objects += "test"; //"{id: " + results.rows.item(i).id + ", title: " + results.rows.item(i).title + "}";
      }
    });
  });
  returned_objects += "]";
  return returned_objects;
}