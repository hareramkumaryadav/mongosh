
// using $sum,$count,$push.$addToSet,$min,$max,$first,$last,$sort,$top,$topN,$bottom,$bottomN
// PART 1 — $sum (15 Interview Questions)


// Find total salary of all employees.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            total_salary:{$sum:"$salary"}
           
        }
    }
])

// Find department-wise total salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            department_wise_total_salary:{$sum:"$salary"}
        }
    }
])

// Find city-wise total salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            city_wise_total_salary:{$sum:"$salary"}
        }
    }
])


// Find total experience by department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            total_experience:{$sum:"$experience"}
        }
    }
])

// Find total employees in each department using $sum:1.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            total_employees:{$sum:1}
        }
    }
])

// Find total Active employees department-wise.
db.employees.aggregate([
    {$match:{status:{$regex:/^active/i}}},
    {
        $group:{
            _id:"$department",
            total_employees:{$sum:1}
        }
    }
])

// Find total salary of IT employees.
db.employees.aggregate([
    {$match:{department:{$regex:/^it/i}}},
    {
        $group:{
            _id:null,
            total_it_salary:{$sum:"$salary"}
        }
    }
])

// Find total salary of Female employees.
db.employees.aggregate([
    {$match:{gender:{$regex:/^female/i}}},
    {
        $group:{
            _id:null,
            total_female_salary:{$sum:"$salary"}
        }
    }
])

// Find total salary of employees who joined after 2020.
 db.employees.aggregate([
    {$match:{joiningYear:2020}},
    {
        $group:{
            _id:null,
            total_salary:{$sum:"$salary"}
        }
    }
 ])

 // Find department-wise total ratings.
 db.employees.aggregate([
   {
    $group:{
        _id:"$department",
        total_rating:{$sum:"$rating"}
    }
   }
 ])

 // Find total salary by city.
 db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            total_salary:{$sum:"$salary"}
        }
    }
 ])

 // Find total experience by city.
 db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            total_experience:{$sum:"$experience"}
        }
    }
 ])

 // Find total Finance salary.
 db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
            _id:null,
            total_salary:{$sum:"$salary"}
        }
    }
 ])

 // Find total Marketing salary.
 db.employees.aggregate([
    {$match:{department:"Marketing"}},
    {
        $group:{
            _id:null,
            total_salary:{$sum:"$salary"}
        }
    }
 ])

 // Find grand total experience.
 db.employees.aggregate([
    {$group:{
        _id:null,
        grand_toal_experience:{$sum:"$experience"}
    }}
 ])

//  PART 2 — $avg (15 Questions)


// Average salary by department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            avg_salary:{$avg:"$salary"}
        }
    }
])

// Average experience by city.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            city_avg_salary:{$avg:"$salary"}
        }
    }
])

// Average rating by department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            avg_rating_dep:{$avg:"$rating"}
        }
    }
])


// Average salary of Active employees.
db.employees.aggregate([
    {
        $match:{status:"Active"}
    },
    {
        $group:{
            _id:null,
            avg_salary:{$avg:"$salary"}
        }
    }
])

// Average salary of Female employees.
db.employees.aggregate([
    {$match:{gender:"Female"}},
    {
        $group:{
            _id:null,
            female_avg_salary:{$avg:"$salary"}
        }
    }
])

// Average salary of Male employees.
db.employees.aggregate([
    {$match:{gender:"Male"}},
    {
        $group:{
            _id:null,
            male_avg_salary:{$avg:"$salary"}
        }
    }
])

// Average experience of IT department.
db.employees.aggregate([
    {$match:{department:{$regex:/^it/i}}},
    {
        $group:{
            _id:null,
            avg_exp_it:{$avg:"$experience"}
        }
    }
])

// Average rating city-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            avg_rating_city:{$avg:"$rating"}
        }
    }
])

// Department having highest average salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
           department_highest_average_salary:{$avg:"$salary"}
        },
       
    },
      {$sort:{department_highest_average_salary:-1}},
        {$limit:1}
])

// Department having lowest average salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
           department_highest_average_salary:{$avg:"$salary"}
        },
       
    },
      {$sort:{department_highest_average_salary:1}},
        {$limit:1}
])

// Average joining year.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            avg_joiningYear:{$avg:"$joiningYear"}
        }
    }
])

// Average salary of Delhi employees.
db.employees.aggregate([
    {$match:{city:"Delhi"}},
    {
        $group:{
            _id:null,
            delhi_avg_emp:{$avg:"$salary"}
        }
    }
])

// Average salary of Bangalore employees.
db.employees.aggregate([
    {$match:{city:"Bangalore"}},
    {
        $group:{
            _id:null,
            delhi_avg_emp:{$avg:"$salary"}
        }
    }
])

// Average salary after filtering salary >50000.
db.employees.aggregate([
    {$match:{salary:{$gt:50000}}},
    {
        $group:{
            _id:null,
            avg_salary:{$avg:"$salary"}
        }
    }
])

// Average rating of Active employees.
db.employees.aggregate([
    {$match:{status:"Active"}},
    {
        $group:{
            _id:null,
            avg_rating:{$avg:"$rating"}
        }
    }
])

// PART 3 — $min (10 Questions)


// Minimum salary department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            min_salary:{$min:"$salary"}
        }
    }
])

// Minimum experience city-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            min_experience:{$min:"$experience"}
        }
    }
])

// Lowest rating.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            min_rating:{$min:"$rating"}
        }
    }
])

// Lowest salary in IT.
db.employees.aggregate([
    {$match:{department:{$regex:/it/i}}},
    {
        $group:{
            _id:null,
            lowest_salary:{$min:"$salary"}
        }
    }
])

// Earliest joining year.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            Earliest_joining:{$min:"$joiningYear"}
        }
    }
])

// Minimum salary overall.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            min_salary:{$min:"$salary"}
        }
    }
])

// Minimum experience overall.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            min_experience:{$min:"$experience"}
        }
    }
])

// Lowest Finance salary.
db.employees.aggregate([
    {
        $match:{department:"Finance"}
    },
    {
        $group:{
            _id:null,
            lowest_salary:{$min:"$salary"}
        }
    }
])

// Minimum rating by department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            _min_rating:{$min:"$rating"}
        }
    }
])

// PART 4 — $max (10 Questions)


// Maximum salary department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            max_salary:{$max:"$salary"}
        }
    }
])

// Highest rating.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            max_rating:{$mix:"$rating"}
        }
    }
])

// Maximum experience.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            max_experience:{$max:"$experience"}
        }
    }
])

// Latest joining year.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            _latest_joining:{$max:"$joiningYear"}
        }
    }
])

// Highest salary overall.
db.employees.aggregate([
    {
       $group:{
        _id:null,
        max_salary:{$max:"$salary"}
       }
    }
])

// Highest Finance salary.
db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
              _id:null,
              high_salary:{$max:"$salary"}
        }
    }
])

// Highest rating by city.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            high_rating:{$max:"$rating"}
        }
    }
])

// Highest experience by city.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            _high_experience:{$max:"$experience"}
        }
    }
])

// PART 5 — $first (10 Questions)

// Sort before using $first.

// First employee in each department by joining year.
db.employees.aggregate([
  {
    $sort: {
      joiningYear: 1
    }
  },
  {
    $group: {
      _id: "$department",
      firstEmployee: {
        $first: "$name"
      },
      joiningYear: {
        $first: "$joiningYear"
      }
    }
  }
])

// First employee alphabetically in every department.
db.employees.aggregate([
    {$sort:{name:1}},
    {
        $group:{
            _id:"$department",
            firstEmployee:{$first:"$name"}
        }
    }
])

// First salary in each city.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            employees_name:{$first:"$name"},
            salary:{$first:"$salary"}
        }
    }
])

// First Active employee.
db.employees.aggregate([
    {$match:{status:"Active"}},
    {
        $group:{
            _id:"$status",
            employees_name:{$first:"$name"}
        }
    }
])

// First Female employee department-wise.
db.employees.aggregate([
    {$match:{gender:"Female"}},
    {
        $group:{
            _id:"$department",
            employees_name:{$first:"$name"}
        }
    }
])

// First employee after sorting by salary.
db.employees.aggregate([
    {$sort:{salary:1}},
    {
        $group:{
            _id:null,
            first_employee:{$first:"$name"}
        }
    }
])

// First joining employee.
db.employees.aggregate([
    {$sort:{joiningYear:1}},
    {
        $group:{
            _id:null,
            first_emp:{$first:"$name"},
            joiningYear:{$first:"$joiningYear"}
        }
    }
])

// First rating in each department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            rating:{$first:"$rating"},
            name:{$first:"$name"}
        }
    }
])

// First city-wise employee.

db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            first_emp:{$first:"$name"}
        }
    }
])

// First Finance employee.
db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
            _id:null,
            first_emp:{$first:"$name"}
        }
    }
])

// PART 6 — $last (10 Questions)


// Last employee by salary.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            last_emp:{$last:"$name"},
            salary:{$last:"$salary"}
        }
    }
])

// Last employee department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            last:{$last:"$name"}
        }
    }
])

// Last joining employee.
db.employees.aggregate([
    {$sort:{joiningYear:1}},
    {
        $group:{
            _id:null,
            employee:{$last:"$name"}
        }
    }
])

// Last city employee.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            last:{$last:"$name"}
        }
    }
])

// Last Active employee.
db.employees.aggregate([
    {$match:{status:"Active"}},
    {
        $group:{
            _id:null,
            _em_name:{$last:"$name"}
        }
    }
])

// Last Female employee.
db.employees.aggregate([
    {$match:{gender:"Female"}},
    {
        $group:{
            _id:null,
            last:{$last:"$name"}
        }
    }
])

// Last salary department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            last_salary:{$last:"$salary"}
        }
    }
])

// Last rating.

db.employees.aggregate([
    {
        $group:{
            _id:null,
            last_raitng:{$last:"$rating"}
        }
    }
])

// Last Finance employee.

db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
            _id:null,
            last_name:{$last:"$name"}
        }
    }
])

// Last IT employee.
db.employees.aggregate([
    {$match:{department:"IT"}},
    {
        $group:{
            _id:null,
            last_name:{$last:"$name"}
        }
    }
])

// PART 7 — $push (15 Questions)


// Push all employee names department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            employees:{$push:"$name"}
        }
    }
])

// Push salaries department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            salaries:{$push:"$salary"}
        }
    }
])

// Push cities department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            cities:{$push:"$city"}
        }
    }
])

// Push skills.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            skills:{$push:"$skills"}
        }
    }
])

// Push ratings.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            ratings:{$push:"$rating"}
        }
    }
])

// Push joining years.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            joinings:{$push:"$joiningYear"}

        }
    }
])

// Push Active employees.
db.employees.aggregate([
    {$match:{status:"Active"}},
    {
        $group:{
            _id:null,
            employee:{$push:"$$ROOT"}
        }
    }
])

// Push employee IDs.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            employees_ids:{$push:"$empId"}
        }
    }
])


// Push names city-wise.

db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            names:{$push:"$name"}
        }
    }
])

// Push salaries city-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            salaries:{$push:"$salary"}
        }
    }
])
// Push Female names.
db.employees.aggregate([
    {$match:{gender:"Female"}},
    {
        $group:{
            _id:null,
            names:{$push:"$name"}
        }
    }
])
// Push Male names.
db.employees.aggregate([
    {$match:{gender:"Male"}},
    {
        $group:{
            _id:null,
            names:{$push:"$name"}
        }
    }
])
// Push experiences.
db.employees.aggregate([
    
    {
        $group:{
            _id:null,
            experiences:{$push:"$experience"}
        }
    }
])
// Push Finance names.
db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
            _id:null,
            names:{$push:"$name"}
        }
    }
])

// Push IT names.

db.employees.aggregate([
    {$match:{department:"IT"}},
    {
        $group:{
            _id:null,
            names:{$push:"$name"}
        }
    }
])

// PART 8 — $addToSet (15 Questions)
// Unique cities.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_cities:{$addToSet:"$city"}
        }
    }
])
// Unique departments.

db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_departments:{$addToSet:"$department"}
        }
    }
])
// Unique skills.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_skills:{$addToSet:"$siklls"}
        }
    }
])
// Unique joining years.

db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_joining:{$addToSet:"$joiningYear"}
        }
    }
])
// Unique salaries.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_salaries:{$addToSet:"$salary"}
        }
    }
])
// Unique genders.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_genders:{$addToSet:"$gender"}
        }
    }
])
// Unique statuses.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_status:{$addToSet:"$status"}
        }
    }
])
// Unique city department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            unique_cities:{$addToSet:"$city"}
        }
    }
])
// Unique skills department-wise.
db.employees.aggregate([
  {
    $unwind: "$skills"
  },
  {
    $group: {
      _id: "$department",
      unique_skills: {
        $addToSet: "$skills"
      }
    }
  }
])
// Unique ratings.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_rating:{$addToSet:"$rating"}
        }
    }
])
// Unique experiences.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            unique_experiences:{$addToSet:"$experience"}
        }
    }
])
// Unique Finance skills.
db.employees.aggregate([
    {$match:{department:"Finance"}},
    {$unwind:"$skills"},
    {
        $group:{
            _id:null,
            unique_finance_skills:{$addToSet:"$skills"}
        }
    }
])
// Unique IT skills.
db.employees.aggregate([
    {$match:{department:"IT"}},
    {$unwind:"$skills"},
    {
        $group:{
            _id:null,
            unique_finance_skills:{$addToSet:"$skills"}
        }
    }
])
// Unique Marketing skills.
db.employees.aggregate([
    {$match:{department:"Marketing"}},
    {$unwind:"$skills"},
    {
        $group:{
            _id:null,
            unique_finance_skills:{$addToSet:"$skills"}
        }
    }
])
// Unique employee names by city.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            name:{$addToSet:"$name"}
        }
    }
])

// PART 9 — $top (10 Questions)
// Highest salary employee in each department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            highest_salary:{
                $top:{
                sortBy:{salary:-1},
                output:{
                    name:"$name",
                    salary:"$salary"
                }
            }}
        }
    }
])
// Highest rated employee.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            highest_rated:{
                $top:{
                    sortBy:{rating:-1},
                    output:{
                        name:"$name",
                        rating:"$rating"
                    }
                }
            }
        }
    }
])
// Most experienced employee.

db.employees.aggregate([
    {
        $group:{
            _id:null,
            most_exp_emp:{
                $top:{
                    sortBy:{experience:-1},
                    output:{
                        name:"$name",
                        experience:"$experience"
                    }
                }
            }
        }
    }
])
// Top Finance employee.

db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
            _id:null,
            top_finance_emp:{
                $top:{
                    sortBy:{},
                    output:{
                        name:"$name",
                        department:"$department",
                        _id:"$_id"
                    }
                }
            }
        }
    }
])
// Top IT employee.
db.employees.aggregate([
    {$match:{department:"IT"}},
    {
        $group:{
            _id:null,
            top_finance_emp:{
                $top:{
                    sortBy:{},
                    output:{
                        name:"$name",
                        department:"$department",
                        _id:"$_id"
                    }
                }
            }
        }
    }
])

// Top Marketing employee.
db.employees.aggregate([
    {$match:{department:"Marketing"}},
    {
        $group:{
            _id:null,
            top_finance_emp:{
                $top:{
                    sortBy:{},
                    output:{
                        name:"$name",
                        department:"$department",
                        _id:"$_id"
                    }
                }
            }
        }
    }
])
// Top city-wise salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            top:{
                $top:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    }
                }
            }
        }
    }
])
// Top joining year employee.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            firstEmployee:{
                $top:{
                    sortBy:{joiningYear:1},
                    output:{
                        name:"$name",
                        joiningYear:"$joiningYear"
                    }
                }
            }
        }
    }
])
// Highest salary Female employee.
db.employees.aggregate([
    {$match:{gender:"Female"}},
    {
        $group:{
            _id:null,
            high_female_salary:{
                $top:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",

                    }
                }
            }

        }
    }
])
// Highest salary Male employee.
db.employees.aggregate([
    {$match:{gender:"Male"}},
    {
        $group:{
            _id:null,
            high_female_salary:{
                $top:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",

                    }
                }
            }

        }
    }
])

// PART 10 — $topN (10 Questions)
// Top 3 salaries department-wise.

db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            top_3_salary:{
                $topN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:3
                }
            }
        }
    }
])
// Top 2 rated employees.

db.employees.aggregate([
    {
        $group:{
            _id:null,
            top_2_rated_emp:{
                $topN:{
                    sortBy:{rating:-1},
                    output:{
                        name:"$name",
                        rating:"$rating"
                    },
                    n:2
                }
            }
        }
    }
])
// Top 5 highest salaries.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            top5th_highest_salary:{
                $topN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])
// Top 3 experienced employees.

db.employees.aggregate([
    {
        $group:{
            _id:null,
            top3experiences:{
                $topN:{
                    sortBy:{experience:-1},
                    output:{
                        name:"$name",
                        experience:"$experience"
                    },
                    n:3
                }
            }
        }
    }
])
// Top 2 Finance salaries.
db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
            _id:null,
            top2finace:{
                $topN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary",
                        department:"$department"
                    },
                    n:2
                }
            }
        }
    }
])
// Top 3 IT salaries.
db.employees.aggregate([
    {$match:{department:"IT"}},
    {
        $group:{
            _id:null,
            top2finace:{
                $topN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary",
                        department:"$department"
                    },
                    n:2
                }
            }
        }
    }
])
// Top 5 ratings.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            top5rating:{
                $topN:{
                    sortBy:{rating:-1},
                    output:{
                        name:"$name",
                        rating:"$rating"
                    },
                    n:5
                }
            }
        }
    }
])

// Top 4 Active employees by salary.
db.employees.aggregate([
    {$match:{status:"Active"}},
    {
        $group:{
            _id:null,
            top4active_employee:{
                $topN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:4
                }
            }
        }
    }
])
// Top 3 Female salaries.
db.employees.aggregate([
    {$match:{gender:"Female"}},
    {
        $group:{
            _id:null,
            top4active_employee:{
                $topN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:3
                }
            }
        }
    }
])

// PART 11 — $bottom (10 Questions)
// Lowest salary department-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            lowest_salary:{
                $bottom:{
                    sortBy:{salary:1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    }
                }
            }
        }
    }
])
// Lowest rating.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            lowest_rating:{
                $bottom:{
                    sortBy:{rating:-1},
                    output:{
                        name:"$name",
                        rating:"$rating"
                    }
                }
            }
        }
    }
])
// Lowest experience.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            lowest_exp:{
                $bottom:{
                    sortBy:{experience:-1},
                    output:{
                        name:"$name",
                        experience:"$experience"
                    }
                }
            }
        }
    }
])
// Bottom Finance employee.
db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
            _id:null,
            finance:{
                $bottom:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        department:"$department"
                    }
                }
            }
        }
    }
])
// Bottom IT employee.
db.employees.aggregate([
    {$match:{department:"IT"}},
    {
        $group:{
            _id:null,
            boom:{
                $bottom:{
                    sortBy:{salary:-1},
                    output:{
                         name:"$name",
                         salaries:"$salary"
                    }
                  
                }
            }

        }
    }
])
// Lowest joining year.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            lowest_joining:{
                $bottom:{
                    sortBy:{joiningYear:-1},
                    output:{
                        name:"$name",
                        joiningYear:"$joiningYear"
                    }
                }
            }
        }
    }
])
// Lowest salary Female.
db.employees.aggregate([
    {$match:{gender:"Female"}},
    {
        $group:{
            _id:null,
            lowest_female_salary:{
                $bottom:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    }
                }
            }
        }
    }
])
// Lowest salary Male.
db.employees.aggregate([
    {$match:{gender:"Male"}},
    {
        $group:{
            _id:null,
            lowest_female_salary:{
                $bottom:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    }
                }
            }
        }
    }
])
// Lowest salary city-wise.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            lowest_salary:{
                $bottom:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    }
                }
            }
        }
    }
])
// Lowest Active employee salary.
db.employees.aggregate([
    {
        $match:{status:"Active"}
    },
    {
        $group:{
            _id:null,
            lowest_salary:{
                $bottom:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    }
                }
            }
        }
    }
])

// PART 12 — $bottomN (10 Questions)
// Bottom 3 salaries.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            b_3_salary:{
                $bottomN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:3
                }
            }
        }
    }
])

// Bottom 5 ratings.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            b_5_rating:{
                $bottomN:{
                    sortBy:{rating:-1},
                    output:{
                        name:"$name",
                        rating:"$rating"
                    },
                    n:5
                }
            }
        }
    }
])
// Bottom 2 Finance salaries.
db.employees.aggregate([
    {$match:{department:"Finance"}},
    {
        $group:{
            _id:null,
            b_2_salaries:{
                $bottomN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])
// Bottom 3 IT salaries.
db.employees.aggregate([
    {$match:{department:"IT"}},
    {
        $group:{
            _id:null,
            b_3_salaries:{
                $bottomN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])
// Bottom 4 experiences.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            b_4_exp:{
                $bottomN:{
                    sortBy:{experience:-1},
                    output:{
                        name:"$name",
                        experince:"$experience"
                    },
                    n:4
                }
            }
        }
    }
])
// Bottom 2 joining years.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            b_2_joining:{
                $bottomN:{
                    sortBy:{joiningYear:-1},
                    output:{
                        name:"$name",
                        joiningYear:"$joiningYear"
                    },
                    n:2
                }
            }
        }
    }
])
// Bottom Female salaries.
db.employees.aggregate([
    {$match:{gender:"Female"}},
    {
        $group:{
            _id:null,
            b_female_salary:{
                $bottomN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])
// Bottom Male salaries.
db.employees.aggregate([
    {$match:{gender:"Male"}},
    {
        $group:{
            _id:null,
            b_female_salary:{
                $bottomN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])
// Bottom Marketing salaries.
db.employees.aggregate([
    {$match:{department:"Marketing"}},
    {
        $group:{
            _id:null,
            b_female_salary:{
                $bottomN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])
// Bottom Active salaries.
db.employees.aggregate([
    {$match:{status:"Active"}},
    {
        $group:{
            _id:null,
            b_female_salary:{
                $bottomN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])

// Most Asked Real Interview Questions

// These are very common in MERN interviews:

// Department-wise employee count.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            total_employees:{$count:{}}
        }
    }
])
// Department-wise total salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            total_salary:{$sum:"$salary"}
        }
    }
])
// Department-wise average salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            total_salary:{$avg:"$salary"}
        }
    }
])
// Department-wise highest salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            total_salary:{$max:"$salary"}
        }
    }
])
// Department-wise lowest salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            total_salary:{$min:"$salary"}
        }
    }
])
// Department-wise highest-paid employee ($top).
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            highest_salary:{
                $top:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    }
                }
            }
        }
    }
])
// Department-wise lowest-paid employee ($bottom).
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            b_salary:{
                $bottom:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    }
                }
            }
        }
    }
])
// Department-wise top 3 salaries ($topN).
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            top_3_salary:{
                $topN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])
// Department-wise bottom 3 salaries ($bottomN).
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            top_3_salary:{
                $bottomN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:2
                }
            }
        }
    }
])
// City-wise employee count.
db.employees.aggregate([{
    $group:{
        _id:"$city",
        city_emp:{$count:{}}
    }
}])
// City-wise average salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            city_wise_avg_salary:{
                $avg:"$salary"
            }
        }
    }
])
// City-wise total salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$city",
            city_wise_total_salary:{$sum:"$salary"}
        }
    }
])
// Find the department with the highest average salary.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            highest_salary:{$avg:"$salary"},
            
        }
    },
    {$sort:{highest_salary:-1}}
])
// Find duplicate salaries using $group.
db.employees.aggregate([
    {
        $group:{
            _id:"$salary",
            salaries:{$push:"$salary"}
        }
    }
])
// Count employees by gender.
db.employees.aggregate([
    {
        $group:{
            _id:"$gender",
            total_gender:{$count:{}}
        }
    }
])
// Collect all employee names in each department using $push.
db.employees.aggregate([
{
    $group:{
        _id:null,
        names:{$push:"$name"}
    }
}
])
// Collect unique skills by department using $addToSet.
db.employees.aggregate([
    {$unwind:"$skills"},
    {
        $group:{
            _id:"$department",
            unique_skills:{$addToSet:"$skills"}
        }
    }
])
// Find the most experienced employee in each department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            most_exp_emp:{
                $top:{
                    sortBy:{experience:-1},
                    output:{
                        name:"$name",
                        experience:"$experience"
                    }
                }
            }
        }
    }
])
// Find the latest joined employee in each department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            _latest_joining:{
                $bottom:{
                    sortBy:{joiningYear:1},
                    output:{
                        name:"$name",
                        experience:"$joiningYear"
                    }
                }
            }
        }
    }
])
// Find the earliest joined employee in each department.
db.employees.aggregate([
    {
        $group:{
            _id:"$department",
            _latest_joining:{
                $bottom:{
                    sortBy:{joiningYear:-1},
                    output:{
                        name:"$name",
                        experience:"$joiningYear"
                    }
                }
            }
        }
    }
])


// Count Active vs Inactive employees.
db.employees.aggregate([
    {
        $group:{
            _id:"$status",
            total:{$count:{}},
        }
    }
])
// Calculate the overall payroll (sum of salaries).
db.employees.aggregate([
    {
        $group:{
            _id:null,
            total_salary_sum:{$sum:"$salary"}
        }
    }
])
// Find the top 5 highest-paid employees across the company.
db.employees.aggregate([
    {
        $group:{
            _id:null,
            top_5_salary:{
                $topN:{
                    sortBy:{salary:-1},
                    output:{
                        name:"$name",
                        salary:"$salary"
                    },
                    n:5
                }
            }
        }
    }
])
