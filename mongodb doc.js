
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


//Comparison Operators
use('CraftShop') //CraftShop database Name

db.brands.find()

db.brands.findOne(
    { "name": "Adidas" }
)

use('CraftShop') //CraftShop database Name

db.employees.find({
    salary: { $eq: 50000 }
})
db.employees.find({
    salary: { $ne: 50000 }
})
db.employees.find({
    salary: { $gt: 50000 }
})
db.employees.find({
    salary: { $gte: 50000 }
})
db.employees.find({
    salary: { $lt: 50000 }
})
db.employees.find({
    salary: { $lte: 50000 }
})
db.employees.find({
    salary: { $in: [25000, 50000] }
})
db.employees.find({
    salary: { $nin: [25000, 50000] }
})

// Logical Operators
use('CraftShop') //CraftShop database Name

db.employees.find({
    $and: [ // multiple condition
        { salary: { $gt: 50000 } },
        { name: { $eq: "John" } }
    ]
})
use('CraftShop') //CraftShop database Name

db.employees.find({
    $or: [ // multiple condition
        { salary: { $gt: 50000 } },
        { name: { $eq: "John" } }
    ]
})

use('CraftShop') //CraftShop database Name

db.monthlyBudget.find({
    $expr: {
        $lt: ['$amount', '$max']
    }
})
db.monthlyBudget.find({
    budget: { $mod: [2, 0] }
})

//24

