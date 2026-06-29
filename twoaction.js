// findOneAndUpdate({}{})
// findOneAndDelete({})
// findOneAndReplace({}{})
// send option may be projection:{field:1,filed:0}
// returnDocument:"before/after"
// sort:{age:1} asc
// sort:{age:-1}
// upSert:true
// upSert:false
// using findOneAndUpdate()
db.users.findOneAndUpdate({name:{$regex:"^ha"}},
    {$set:{age:30}},
    {
    projection:{name:1,email:1,age:1,_id:0,
    returnDocument:"before",
    sort:{name:1}
    }
})
db.users.findOneAndUpdate({name:{$regex:"^ha"}},
    {$set:{age:30}},
    {
    projection:{name:1,email:1,age:1,_id:0,
    returnDocument:"after",
    sort:{name:1}
    }
})
db.users.findOneAndUpdate({name:{$regex:"^zahir"}},
    {$set:{age:600,name:"lalu"}},
    {
    returnDocument:"after",
    sort:{name:1},
    upsert:true
    }
)

db.users.findOneAndUpdate(
  { name: { $regex: "^zahir" } },
  { $set: { age: 30 } },
  {
    projection: {
      name: 1,
      email: 1,
      age: 1,
      _id: 0
    },
    returnDocument: "after",
    sort: { name: 1 },
    upsert: true
  }
)

db.users.findOneAndReplace(
    {name:{$regex:"^Rohit"}},
    {name:"rohit kumar",age:"24",gender:"male"}
)

db.users.findOneAndDelete({name:{$regex:"^r"}},{returnDocument:"before"})