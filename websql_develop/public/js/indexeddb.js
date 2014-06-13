// Initialize
var dbName = "example";
var dbVersion = 1.0;
var exampleDB = {};
var indexedDB = window.indexedDB ||
                window.webkitIndexedDB ||
                window.mozIndexedDB;
todoDB.indexedDB = {};
todoDB.indexedDB.db = null;
if ('webkitIndexedDB' in window) {
   window.IDBTransaction = window.webkitIDBTransaction;
   window.IDBKeyRange = window.webkitIDBKeyRange;
}

// Import

// Export / Backup

// Clean Data