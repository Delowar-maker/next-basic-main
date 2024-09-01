
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

// Projection Query
// The project() method allows you to specify which fields you want to include in the query result.

use('CraftShop') //CraftShop database Name

db.brands.find(
    {}, // spacial parometer
    { projection: { _id: 0 } }
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
// exists true show property
//exists false all authers show
db.brands.find({
    city: { $exists: true } // if city is exist then show city property
})
db.brands.find({
    city: { $exists: false } // if city is not exist then show city property
})

use('CraftShop') //CraftShop database Name
db.employees.find({
    salary: { $type: 2 }
})

use('test1')
db.brands.find().sort({ name: 1 })
use('test1')


//count
use('test1')
db.brands.find().count('total') // total must be used

use('test1')
db.brands.find().limit(2) //frist 2 showing
use('test1')
db.brands.find().limit(2).skip(1) // frist 1 not showing but 2 showing

// short limit together
use('test1')
db.brands.find().sort({ _id: -1 }).limit(2)
// //distinct   method
use('test1')
db.brands.distinct('name') // unique data

use('test1')
db.brands.deleteOne({
    "_id": ObjectId("66bf6dd081f0a2508a9eb8e2")
})
use('test1')
db.brands.deleteMany({
    price: { $in: [3000, 5000] }
})
use('test1')
db.brands.aggregate([
    { $count: "total" }
])
use('test1')
db.brands.aggregate([
    { $sort: { name: 1 } }
])
db.brands.aggregate([
    { $sort: { name: -1 } }
])
// sort complet
db.brands.aggregate([
    { $limit: 2 }
])
db.brands.aggregate([
    { $sort: { _id: 1 } }, // asscending
    { $limit: 2 }
])
use('CraftShop')
db.employees.aggregate([
    { $match: { $gt: { salary: 4000 } } },
    { $match: { city: "London" } }
])

use('test1')

db.employees.aggregate([
    { $match: { name: /a/ } } // must be use / / blank slash 2
])
use('CraftShop')
db.employees.aggregate([
    { $match: $and([{ salary: { $gt: 4000 } }, { city: "London" }]) },

])
