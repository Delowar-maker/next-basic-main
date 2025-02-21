
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
//  group by multiple
db.employees.aggregate([
    {
        $group: { _id: "$dsesignation", city: "$city" },
        sum: { $sum: "$salary" },
        avg: { $avg: "$salary" },
        max: { $max: "$salary" },
        min: { $min: "$salary" }
    }

])

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
use('test1')

db.employees.find({ name: /a/ })


db.products.aggregate([
    { $match: { name: { $in: ["Apple iPhone", "Samsung Galaxy"] } } }
])
use('CraftShop') //CraftShop database Name
db.brands.aggregate([
    { $project: { _id: 0 } }
])

db.employees.aggregate([
    {
        $group: { _id: "$dsesignation", city: "$city" },
        sum: { $sum: "$salary" },
    }

])
db.employees.aggregate([
    { $group: { _id: "$dsesignation", total: { $sum: "$salary" }, avg: { $avg: "$salary" } } }
])
// without group by sum and avg
db.employees.aggregate([
    { $group: { _id: "$dsesignation", total: { $sum: "$salary" }, avg: { $avg: "$salary" } } }
])
db.employees.aggregate([
    { $group: { _id: 0, max: { $max: "$salary" } } } // 0 must be use
])
db.employees.aggregate([
    { $group: { _id: 0, sum: { $sum: "$salary" } } } // 0 must be use
])
db.employees.aggregate([
    { $group: { _id: 0, sum: { $sum: "$salary" } } } // 0 must be use
])
db.employees.aggregate([
    { $group: { _id: 0, avg: { $avg: "$salary" } } } // 0 must be use
])
db.products.aggregate([
    { $lookup: { from: "categories", localField: "categoryID", foreignField: "categoryID", as: "category" } }
])

export async function GET() {
    console.log('Hello, Next.js!');

    return new Response('Hello, Next.js!')
}
import comments from "@/app/data/comments";

export async function GET() {
    return Response.json(comments)
}
export async function POST(request) {
    const comment = await request.json();
    const newComment = {
        // id: Math.random(),
        id: comments.length + 1,
        ...comment
    }
    comments.push(newComment);
    // return Response.json(newComment)
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}

import comments from "@/app/data/comments";
import { redirect } from "next/navigation";

export async function GET(_request, { params }) {
    const commentId = params.id;
    if (parseInt(commentId) > comments.length) {
        redirect('/api/comments')
    }
    const comment = comments.find(comment => comment.id === parseInt(commentId))
    return Response.json(comment)
}


// PATCH

export async function PATCH(request, { params }) {
    const comment = await request.json() // request থেকে বের করে নিয়ে আসলাম
    const commentId = params.id
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(commentId))
    comments[commentIndex].text = comment.text;
    return Response.json(comments[commentIndex])
}

// DELETE
export async function DELETE(_request, { params }) {

    const commentId = params.id
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(commentId))
    const commentToDelete = comments[commentIndex]
    comments.splice(commentIndex, 1)
    return Response.json(commentToDelete)
}
export function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
}
export async function GET(request) {
    const requestHeaders = new Headers(request.headers)
        // console.log(requestHeaders);
    
    console.log(requestHeaders.get('Authorization'));

    return new Response('Profile API')

}

import { headers } from "next/headers";
export async function GET(_request) {
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders);
    // console.log(requestHeaders.get('Authorization'));
    const headersList = headers()
    console.log(headersList.get('Authorization'));
    return new Response('Profile API')

}

export async function GET(request) {
    console.log(request.cookies.get('theme'));
    return new Response("Profile API", {
        status: 200,
        headers: { 'Set-Cookie': "theme=orange" },
    })
}
export async function GET(request) {
    console.log(request.cookies.get('theme'));
    return new Response("Profile API", {
        status: 200,
        headers: { 'Set-Cookie': "theme=orange" },
    })
}
import { cookies } from 'next/headers'
 
export async function GET(request) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  })
}
export async function GET(request) {
    console.log(request.cookies.get('theme'));
   return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  })
}
// A page is UI that is unique to a route. You can define a page by default exporting a component from a page.js file.
// For example, to create your index page, add the page.js file inside the app directory:

// `app/page.js` is the UI for the `/` URL
export default function Page() {
  return <h1>Hello, Home page!</h1>
}
db.employees.aggregate([
    { $group: { _id: 0, avg: { $avg: "$salary" } } } // 0 must be use
])
use('only-test')
db.employee.aggregate([
    {$count:'total'}
])

How to make aggregate pipeline and stateging 
Runes 1: aggregate(
[] // pipeline
)
Runes : aggregate(
[
    { }, // stateting 
   { }, // state 
] 
)
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 

const {title, year, genre, star, director} = favouriteFilm

// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star
// const director = favouriteFilm.director

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)

let x = 5;
let y = ++x;  // Pre-increment
console.log(x);  // Output: 6
console.log(y);  // Output: 6

use('test1')
db.brands.find().count('total') // total must be used

Name:{type:String, requird:true}

exports.CreateToken=(req,res)=>{

    let Payload={
        exp:Math.floor(Date.now() / 1000) + (20),
        data:{Name:"Delowar",City:"Dhaka",admin:true}
    }

    let Token= jwt.sign(Payload,"SecretKey123");

    res.send(Token)
     array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


    db.employees.aggregate([
    { $group: { _id: 0, avg: { $avg: "$salary" } } } // 0 must be use
])
use('only-test')
db.employee.aggregate([
    {$count:'total'}
])

    // some chaged
db.brands.insertMany( //brands collection name
        {
            "name": "Banana",
        },
        {
            "name": "Puma",
        }
    ]
)
//w=
    bd.b
    const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  myDisplay(y);
}
    function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels('sky'));
// Expected output: 0
Example Document
{
	title: "Post Title 1",
	body: "Body of post.",
	category: "News",
	likes: 1,
	tags: ["news", "events"],
	date: Date()
}
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
	const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
	function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
	}
	
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content=
"width=device-width, initial-scale=1.0">
    <title>HTML Document</title>
</head>
<body>
    <h1 style="color:green;">
          GeeksforGeeks
      </h1>
    <!-- JavaScript -->
    <script>
      document.writeln
      ("A computer science");
      document.writeln
      ("portal for geeks.");
    </script>
</body>
</html>
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
function calculate(a, b, c, d) {
   console.log('Sum: ' + (a + b + c + d));
}
let str = "Price: $5–$10";
let result = str.match(/\$\d+/g);
console.log(result);
var total = arr.reduce(function(sum, item, index, fullArr) {
   console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr + ' and sum: ' + sum);
   return sum += item
}, 0)
Array.fromAsync(arrayLike)
Array.fromAsync(arrayLike, mapFn)
Array.fromAsync(arrayLike, mapFn, thisArg)


function y() {
    console.log("Y", this);
}
undefined
y()
VM461:2 Y Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
const obj = {
    items:15
}
undefined
obj
{items: 15}
obj.me = y
ƒ y() {
    console.log("Y", this);
}
obj.me()
VM461:2 Y {items: 15, me: ƒ}items: 15me: ƒ y()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
undefined


db.brands.insertOne( //brands collection name
    {
        "name": "Adidas",
    }
)
export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest);

    return mappedArray;
}

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
    return updatedObj;
}

db.brands.insertOne( //brands collection name
    {
        "name": "Adidas",
    }
)
db.brands.find(
    {}, // spacial parometer
    { projection: { _id: 0 } }
)
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
const roles = {
  admin: {
    can: ['create', 'edit', 'delete', 'view'],
  },
  editor: {
    can: ['create', 'edit', 'view'],
  },
  viewer: {
    can: ['view'],
  },
};
let name = 'John';
let age = 25;

let person = {
  name: 'John',
  age: 25,
};
