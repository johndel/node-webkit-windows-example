// Initialize
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var request = window.indexedDB.open("mydb", 3);

request.onerror = function(event) {
  console.log("Error: " + event.target.errorCode);
};

request.onsuccess = function(event) {
  console.log("Success.");
};

// Data
const books = [
  { id: 1, title: "Rails 4 way" },
  { id: 2, title: "Crafting rails applications" }
];
var objectStore = db.createObjectStore("books", { keyPath: "id" });

// Import

// Export / Backup

// Clean Data

// General callbacks