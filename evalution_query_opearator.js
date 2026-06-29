// $regex,$expr,$mod,$jsonSchame
// $regex: this is used to find or search just like % in mysql 
// start charator find used  "^a",end "an$" are case sensetive but we can make it insensetive //i without quote
db.users.find({name:{$regex:"hareram"}})
db.users.find({
    name:{$regex:/^h/i}
})
db.users.find({
    name:{$regex:/h$/i}
})
// using $mod
// it gave remainder result
db.users.find({
    age:{$mod:[2,0]}
})
// $expr
// is used to compare between two fields in same docuemnt
db.users.find({
    $expr:{
        $gt:["$salary","$bonus"]
    }
})

// Find users whose total marks equal maths + science.

db.users.find({$expr:{
    $eq:[
        {$add:["$math","$science"]}, "$total"
    ]
}})


// String Length
db.users.find({
    $expr:{
        $eq:[
            {$strLenCP:"$name"},5
        ]
    }
})

// Multiplication
// price × qty > 1000

db.users.find({
    $expr:{
        $gt:[
            {$multiply:["$price","$qty"]},1000
        ]
    }
})
// Common Operators with $expr
$eq
$ne
$gt
$gte
$lt
$lte
$add
$subtract
$multiply
$divide
$mod
$and
$or
$not
$cond

// 1. $eq (Equal)

// Find users jahan salary aur bonus equal ho.

db.users.find({
    $expr:{
        $eq:["$salary","$bonus"]
    }
})
// salary == bonus
// 2. $ne (Not Equal)
db.users.find({
    $expr:{
        $ne:["$salary","$bonus"]
    }
})
// salary!=bonus
// $gt (Greater Than)
db.users.find({
    $expr:{
        $gt:["$salary","$bonus"]
    }
})
// salary > bonus

// $gte (Greater Than or Equal)
db.users.find({
    $expr:{
        $gte:["$age",18]
    }
})
// age >= 18

// $lt (Less Than)
db.users.find({
    $expr:{
        $gt:["$bonus","$salary"]
    }
})
// bonus < salary

// $lte (Less Than or Equal)
db.users.find({
    $expr:{
        $lte:["$bonus","$salary"]
    }
})
// bonus <= salary

// $add (Addition)

// Find users whose marks1 + marks2 = 90.

db.users.find({
    $expr:{
        $eq:[{$add:["$marks1","$marks2"]},90]
    }
})
// marks1 + marks2 == 90

// $subtract (Subtraction)
// Salary - Bonus > 30000

db.users.find({
    $expr:{
        $gt:[{$substract:["$salary","$bonus"]},30000]
    }
})
// salary - bonus > 30000

// $multiply (Multiplication)
// Price × Quantity > 500

db.users.find({
    $expr:{
        $gt:[{$multiply:["$price","$quentity"]},500]
    }
})

// $divide (Division)
// Salary ÷ Bonus > 4

db.users.find({
    $expr:{
        $gt:[{$divide:["$salary","$bonus"]},4]
    }
})
// $mod (Remainder)
db.users.find({
    $expr:{
        $eq:[{$mod:["$age",2]},0]
    }
})
// $and
// Salary > Bonus AND Age > 18

db.users.find({
    $expr:{
        $and:[
            {  $gt:["$salary","$bonus"]},
            {$gt:["$bonus",18]}
        ]
    }
})

// $or
// Salary > Bonus OR Age > 50
db.users.find({
    $expr:{
        $or:[{$gt:["$salary","$bonus"]},{$gt:["$age",18]}]
    }
})

// Age NOT greater than 18
db.users.find({
    $expr:{
        $not:[
            {$gt:["$age",18]}
        ]
    }
})
// $cond if-else salary 50000
db.users.find({
    $expr:{
        $eq:[
            {
                $cond:{
                    if:{$gte:["$salary",50000]},
                    then:"high",
                    else:"low"
                }
            },"High"
        ]
    }
})
// $jsonSchema
// is used to valide fields ofthe document
