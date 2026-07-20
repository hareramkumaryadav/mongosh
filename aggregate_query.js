// below $match,$count,$sort,$sortByCount,$skip,$limit,$sample

// Find all IT employees.
db.employees.aggregate([
    {$match:{department:{$regex:/it/i}}}
])

db.employees.aggregate([
    {$match:{department:"IT"}}
])

// Find employees whose salary is greater than 50000.

db.employees.aggregate([
    {$match:{salary:{$gt:50000}}}
])

// Find Female employees.
db.employees.aggregate([
    {$match:{gender:{$regex:/female/i}}}
])

// Find employees from Delhi.
db.employees.aggregate([
    {$match:{city:{$regex:/delhi/i}}}
])

// Find employees with experience greater than 5 years.
db.employees.aggregate([
    {$match:{experience:{$gt:5}}}
])

// Find Active employees.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i}}}
])

// Find employees whose salary is between 40000 and 80000.
db.employees.aggregate([
    {$match:{
        $and:[
            {salary:{$gte:40000}},
            {salary:{$lte:80000}}
        ]

    }}
])

// Find employees who joined after 2020.
db.employees.aggregate([
    {$match:{joiningYear:{$gt:2020}}}
])

// Find employees whose age is less than 30.
db.employees.aggregate([
    {$match:{age:{$lt:30}}}
])

// PART-2 ($count) (5 Questions)


// Count all employees.
db.employees.aggregate([
    {$count:"total_employess"}
])

// Count Female employees.
db.employees.aggregate([
    {$match:{gender:{$regex:/^female/i}}},
    {$count:"female_employees"}
])

// Count IT employees.
db.employees.aggregate([
    {$match:{department:{$regex:/^it/i}}},
    {$count:"total it department"}
])

// Count Active employees.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i}}},
    {$count:"total active employee"}
])

// Count employees earning more than 50000.
db.employees.aggregate([
    {$match:{salary:{$gt:50000}}},
    {$count:"tpotal employee earning 50000 more"}
])

// PART-3 ($sort) (10 Questions)


// Sort salary ascending.
db.employees.aggregate([
    {$sort:{salary:1}}
])

// Sort salary descending.
db.employees.aggregate([
    {$sort:{salary:-1}}
])

// Sort age descending.
db.employees.aggregate([
    {$sort:{age:-1}}
])

// Sort experience ascending.
db.employees.aggregate([
    {$sort:{experience:1}}
])

// Sort joining year descending.
db.employees.aggregate([
    {$sort:{joiningYear:-1}}
])

// Sort by department then salary.
db.employees.aggregate([
    {$sort:{department:1,salary:1}}
])

// Sort city alphabetically.
db.employees.aggregate([
    {$sort:{city:1}}
])

// Sort designation alphabetically.
db.employees.aggregate([
    {$sort:{designation:1}}
])

// Sort Active employees by salary.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i}}},
    {$sort:{salary:1}}
])

// Sort employees by experience then age.
db.employees.aggregate([
    {$sort:{experience:1,age:1}}
])

// PART-4 ($project) (10 Questions)

// Show only name and salary.
db.employees.aggregate([
    {$project:{name:1,salary:1,_id:0}}
])

// Show only department.
db.employees.aggregate([
    {$project:{department:1,_id:0}}
])

// Rename salary as monthlySalary.
db.employees.updateMany(
    {},
    {$rename:{salary:"monthlySalary"}}
)

// PART-5 ($limit) (5 Questions)


// Show first 3 employees.
db.employees.aggregate([
    {$limit:3}
])
 
// Show highest paid 2 employees.
db.employees.aggregate([
    {$sort:{monthlySalary:-1}},
    {$limit:2}
])

// Show newest 4 employees.
db.employees.aggregate([
    {$sort:{joiningYear:-1}},
    {$limit:4}
])

// Show first Active employee.
db.employees.aggregate([
    {$match:{staus:{$regex:/^active/i}}},
    {$limit:1}
])

// PART-6 ($skip) (5 Questions)

// Skip first 2 employees.
db.employees.aggregate([
    {$skip:2}
])

// Skip first 3 after sorting salary.
db.employees.aggregate([
    {$sort:{salary:1}},
    {$skip:3}
])

// Skip first 4 IT employees.
db.employees.aggregate([
    {$match:{department:{$regex:/^it/i}}},
    {$skip:4}
])

// Skip first Active employee.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i}}},
    {$skip:1}
])

// PART-7 ($sample) (5 Questions)

// Get 1 random employee.
db.employees.aggregate([
    {$sample:{size:1}}
])

// Get 3 random IT employees.
db.employees.aggregate([
    {$match:{department:{$regex:/^it/i}}},
    {$sample:{size:3}}
])

// Get 5 random Active employees.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i}}},
    {$sample:{size:5}}
])

// Random Female employee.
db.employees.aggregate([
    {$match:{gender:{$regex:/^female/i}}},
    {$sample:{size:1}}
])

// PART-8 ($sortByCount) (10 Questions)

// Count employees by department.
db.employees.aggregate([
    {$sortByCount:"$department"}
])

// Count employees by city.
db.employees.aggregate([
    {$sortByCount:"$city"}
])

// Count employees by gender.
db.employees.aggregate([
    {$sortByCount:"$gender"}
])

// Count employees by status.
db.employees.aggregate([
    {$sortByCount:"$status"}
])

// Count employees by designation.
db.employees.aggregate([
    {$sortByCount:"$designation"}
])

// Count employees by skills.
db.employees.aggregate([
    {$sortByCount:"$monthlySalary"}
])

// Bonus Interview Questions (Most Asked)


// Find the top 5 highest-paid employees.
db.employees.aggregate([
    {$sort:{monthlySalary:-1}},
    {$limit:5}
])

// Find the lowest-paid employee.
db.employees.aggregate([
    {$sort:{monthlySalary:1}},
    {$limit:1}
])

// Find all developers.
db.employees.aggregate([
    {$match:{designation:{$regex:/^developer/i}}}
])

// Find employees from Delhi with salary > 40,000.
db.employees.aggregate([
    {$match:{
        $and:[
            {city:{$regex:/^delhi/i}},
            {monthlySalary:{$gt:40000}}
        ]
    }}
])

// Show only names of Active employees.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i}}},
    {$project:{name:1,_id:0}}
])

// Find random 3 employees from the IT department.
db.employees.aggregate([
    {$match:{department:{$regex:/^it/i}}},
    {$sample:{size:3}}
])

// Count how many employees belong to each city.
db.employees.aggregate([
    {$sortByCount:"$city"}
])

// Find the newest employee.
db.employees.aggregate([
    {$sort:{joiningYear:-1}}
])

// Find employees with more than 5 years of experience sorted by salary.
db.employees.aggregate([
    {$match:{experience:{$gt:5}}},
    {$sort:{monthlySalary:-1}}
])

// Show names and salaries of the highest-paid employees.
db.employees.aggregate([
    {$sort:{monthlySalary:-1}},
    {$project:{name:1,monthlySalary:1,_id:0}}
])

// Find the first 5 Active employees sorted by experience.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i}}},
    {$sort:{experience:-1}},
    {$limit:5}
])

// Find the second page of employees (5 records per page) using $skip and $limit.
db.employees.aggregate([
    {$skip:5},
    {$limit:5}
])

// Find all employees whose skills contain "MongoDB".
db.employees.aggregate([
    {$match:{
        skills:{$in:["MongoDB"]}
    }}
])


// Count employees by department after filtering only Active employees.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i} }},
    {$sortByCount:"$department"}

])

// Show employee names in uppercase (using $project with $toUpper).
db.employees.aggregate([
    {$project:{name:{$toUpper:"$name"}}}
])

// Create a full name field (if first and last names exist) using $concat.
db.employees.aggregate([
    {$project:{
        fullname:{$concat:["$name","_","$department"]}
    }}
])

// Categorize employees into "High Salary" and "Low Salary" using $cond in $project.
db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        monthlySalary:1,
        monthlySalary:{
            $cond:{
                if:{$gt:["$monthlySalary",50000]},
                then:"High Salary",
                else:"Low Salary"
            }
        }
    }}
])

// Show salary after a 10% increment using $multiply in $project.
db.employees.aggregate([
    {$project:{
        monthlySalary:1,
        monthlySalary:{$multiply:["$monthlySalary",1.10]}
    }}
])

// Return only the first skill from the skills array using $arrayElemAt.
db.employees.aggregate([
    {$project:{
        skills:1,
        firstSkill:{
        $arrayElemAt:["$skills",0]
        }
       
    }}
])

// Randomly select one Active IT employee.
db.employees.aggregate([
    {$match:{department:{$regex:/^it/i}}},
    {$sample:{size:1}}
])