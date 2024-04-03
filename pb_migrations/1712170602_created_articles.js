/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "uf8ttg8pn5ioo1s",
    "created": "2024-04-03 18:56:42.064Z",
    "updated": "2024-04-03 18:56:42.064Z",
    "name": "articles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l7ddijdw",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "d4uhripv",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uf8ttg8pn5ioo1s");

  return dao.deleteCollection(collection);
})
