
// Insert Query
// The insertOne() method inserts a single document into the collection.
use('CraftShop') //CraftShop database Name

db.brands.insertOne( //brands collection name
    {
        "name": "Adidas",
    }
)

// Insert Many Query
// The insertMany() method inserts an array of documents into the collection.
use('CraftShop') //CraftShop database Name

db.brands.insertMany( //brands collection name

    [
        {
            "name": "Banana",
        },
        {
            "name": "Puma",
        }
    ]
)

// Find Query
// The find() method returns a cursor that iterates over the query results.

// Find One Query
// The findOne() method returns a single document that matches the query filter.

use('CraftShop') //CraftShop database Name

db.brands.find()

db.brands.findOne(
    { "name": "Adidas" }
)