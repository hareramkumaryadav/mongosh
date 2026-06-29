// element query opearator
// existing ,type
// $existing : this opearator is used check fied existing into docuemnt ornot
// type: this opearator is used check fied type into document
// using $exists
db.users.find({_id: ObjectId('6a3eb7a6a38ba73b35abc115'),phone:{$exists:false}})
db.users.find({age:{$type:"string"}})