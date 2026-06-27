// create database
use school_db
// show databases list
show databases
// drop database
db.dropDatabase()
// create collection
db.createCollection("users")
// rename collection
db.users.renameColletion("user")
// drop collection
db.user.drop()
// show collections
show collections
// create collection and validator
db.createCollection("users",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
             required:['name','username','gender','married_status','email','password'],
            properties:{
                
                name:{
                    bsonType:"string",
                    minLength:3
                },
                username:{
                     bsonType:"string",
                    minLength:3
                },
                gender:{
                     bsonType:"string",
                    enum:['male','female','other']
                },
                married_status:{
                     bsonType:"bool",
                },
                email:{
                     bsonType:"string",
                    minLength:9
                },
                password:{
                     bsonType:"string",
                    minLength:8
                },
                mobile_no:{
                    bsonType:"string",
                    minLength:10
                },
                age:{
                     bsonType:["int","double"],
                    minimum:18,
                    maximum:100
                },
                skills:{
                    bsonType:"array",
                    items:{
                        bsonType:"string"
                    }
                },
                address:{
                    bsonType:"object",
                    required:["street","district","zip_code"],
                    properties:{
                        street:{
                            bsonType:"string",
                            minLength:3
                        },
                        district:{
                              bsonType:"string",
                            minLength:3
                        },
                        zip_code:{
                              bsonType:"int",
                            minimum:100000,
                            maximum:999999
                        }
                    }
                }

            }
        }
    }
})
// insert into users collection using insertOne
db.users.insertOne({
    name:"hareram",
    username:"hareram123",
    gender:"male",
    married_status:true,
    email:"hareram@gmail.com",
    password:"123456780",
    mobile_no:"1234567890",
    skills:["php","js","node","mongosh"],
    address:{
        street:"ukhra",
        district:"burdwan",
        zip_code:713363
    }

})

// using insertMany to insert multplerecoed into colection
db.users.insertMany([
  {
    name: "Hareram",
    username: "hareram01",
    gender: "male",
    married_status: false,
    email: "hareram01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543210",
    age: 22,
    skills: ["JavaScript", "React"],
    address: {
      street: "MG Road",
      district: "Kolkata",
      zip_code: 700001
    }
  },
  {
    name: "Rahul",
    username: "rahul01",
    gender: "male",
    married_status: false,
    email: "rahul01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543211",
    age: 24,
    skills: ["Node.js", "Express"],
    address: {
      street: "Park Street",
      district: "Kolkata",
      zip_code: 700016
    }
  },
  {
    name: "Priya",
    username: "priya01",
    gender: "female",
    married_status: false,
    email: "priya01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543212",
    age: 23,
    skills: ["HTML", "CSS"],
    address: {
      street: "Lake Road",
      district: "Howrah",
      zip_code: 711101
    }
  },
  {
    name: "Amit",
    username: "amit01",
    gender: "male",
    married_status: true,
    email: "amit01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543213",
    age: 30,
    skills: ["MongoDB", "Express"],
    address: {
      street: "GT Road",
      district: "Asansol",
      zip_code: 713301
    }
  },
  {
    name: "Sneha",
    username: "sneha01",
    gender: "female",
    married_status: false,
    email: "sneha01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543214",
    age: 26,
    skills: ["React", "Redux"],
    address: {
      street: "Station Road",
      district: "Durgapur",
      zip_code: 713201
    }
  },
  {
    name: "Rohit",
    username: "rohit01",
    gender: "male",
    married_status: false,
    email: "rohit01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543215",
    age: 28,
    skills: ["Java", "Spring"],
    address: {
      street: "College Road",
      district: "Siliguri",
      zip_code: 734001
    }
  },
  {
    name: "Pooja",
    username: "pooja01",
    gender: "female",
    married_status: true,
    email: "pooja01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543216",
    age: 29,
    skills: ["Python", "Django"],
    address: {
      street: "Hill Road",
      district: "Darjeeling",
      zip_code: 734101
    }
  },
  {
    name: "Vikas",
    username: "vikas01",
    gender: "male",
    married_status: false,
    email: "vikas01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543217",
    age: 27,
    skills: ["Angular", "TypeScript"],
    address: {
      street: "Main Road",
      district: "Malda",
      zip_code: 732101
    }
  },
  {
    name: "Neha",
    username: "neha01",
    gender: "female",
    married_status: false,
    email: "neha01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543218",
    age: 25,
    skills: ["Vue.js", "Nuxt"],
    address: {
      street: "Market Road",
      district: "Bankura",
      zip_code: 722101
    }
  },
  {
    name: "Arjun",
    username: "arjun01",
    gender: "male",
    married_status: true,
    email: "arjun01@gmail.com",
    password: "pass12345",
    mobile_no: "9876543219",
    age: 32,
    skills: ["Laravel", "PHP"],
    address: {
      street: "Temple Road",
      district: "Purulia",
      zip_code: 723101
    }
  }
]);

// delete single document
db.users.deleteOne({_id: ObjectId('6a3eb82fa38ba73b35abc11f')})
// delete many documents
db.users.deleteMany({})
// projection
db.users.find({age:{$eq:20}},{name:1,mobile_no:1})
// using count limit skip
db.users.find({age:{$gt:20}},{name:1,mobile_no:1}).count()
db.users.find({age:{$gt:20}},{name:1,mobile_no:1}).limit(3).skip(1)
// using updateOne or updateMany
// $set,$unset,$rename,$inc,$mul,$currentDate

// using $set 
 db.users.updateOne({_id: ObjectId('6a3eb7a6a38ba73b35abc115')},{
  $set:{weight:160}})
db.users.updateOne({_id: ObjectId('6a3eb7a6a38ba73b35abc115')},{
  $set:{height:160}})
  // multiple columns added at a time
  db.users.updateMany({},{
    $set:{height:160,weight:67}
  })
// using $unset
db.users.updateMany({},{
  $unset:{height:"",weight:""}
})
// using $rename
db.users.updateMany({},{
  $rename:{user_height:"height",user_weight:"weight"}
})
// using $inc
db.users.updateMany({},{
  $inc:{age:2}
})
// using $mul
db.users.updateMany({},{
  $mul:{age:2}
})
// uisng $currentDate
db.users.updateMany({},{
  $currentDate:{createdAt:true,updatedAt:true}
})
// array method : $pop,$push,$pull,$pullAll,$addToSet
// using pop
db.users.updateOne({_id: ObjectId('6a3eb82fa38ba73b35abc116')},{
  $pop:{skills:1}})

  // using push
  db.users.updateOne({_id: ObjectId('6a3eb82fa38ba73b35abc116')},{
  $push:{skills:"react"}})
  // using pull
  db.users.updateOne({_id: ObjectId('6a3eb82fa38ba73b35abc116')},{
  $pull:{skills:"mongosh"}})
  // using addToSet
  db.users.updateOne({_id: ObjectId('6a3eb82fa38ba73b35abc116')},{
  $addToSet:{skills:"python"}})
  // using pullAll
  db.users.updateOne({_id: ObjectId('6a3eb82fa38ba73b35abc116')},{
  $pullAll:{skills:["php","react"]}})

//  comparision opearators
// $eq,$nt,$gt,$gte,$lt,$lte,$in,$nin

// using $eq
db.users.find({name:{$eq:"Hareram"}})
// using $ne
db.users.find({name:{$ne:"Hareram"}})
// using $gt
db.users.find({name:{$gt:20}})
// using $gte
db.users.find({name:{$gte:20}})
// using $lt
db.users.find({name:{$lt:20}})
// using $lte
db.users.find({name:{$lte:20}})
// using $in
db.users.find({name:{$in:["Express"]}})
// using $nin
db.users.find({name:{$nin:["Express"]}})

// logical operator
// $and,$or,$not,$nor
// using $and
db.users.find({
  $and:
   [ {"age":{$gt:10}},{"skills":{$in:["Express"]}}]
  
})
// using $or

db.users.find({
  $or:
   [ {"age":{$lt:10}},{"skills":{$in:["Express"]}}]
  
})
// using $nor

db.users.find({
  $nor:
   [ {"age":{$lt:10}},{"skills":{$in:["Express"]}}]
  
})

// using $not
db.users.find({
  skills:{
    $not:{
      $in:["Express"]
    }
  }
})