// 50 $lookup Interview Questions
// Basic
// Join employees with departments.
db.employees.aggregate([
  {
    $lookup: {
      from: "department",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
]);
// Show employee name with department name.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  {
    $project: {
      name: 1,
      _id: 0,
      department_name: {
        $arrayElemAt: ["$department.departmentName", 0],
      },
    },
  },
]);
// Show employee with salary.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salaries",
    },
  },
]);
// Show employee with address.

db.employees.aggregate([
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "address",
    },
  },
]);
// Show employee with client.
db.employees.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "clientId",
      foreignField: "_id",
      as: "client",
    },
  },
]);
// Show employee with project.
db.employees.aggregate([
  {
    $lookup: {
      from: "projects",
      localField: "projectId",
      foreignField: "_id",
      as: "project",
    },
  },
]);
// Show employee with department manager.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  {
    $project: {
      department_manager: {
        $arrayElemAt: ["$department.manager", 0],
      },
    },
  },
]);

// Show employee city.
db.employees.aggregate([
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "city",
    },
  },
  {
    $project: {
      city: {
        $arrayElemAt: ["$city.city", 0],
      },
    },
  },
]);
// Show employee location.
db.employees.aggregate([
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "address",
    },
  },
]);
// Join all collections together.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "address",
    },
  },
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  {
    $lookup: {
      from: "clients",
      localField: "clientId",
      foreignField: "_id",
      as: "client",
    },
  },
  {
    $lookup: {
      from: "projects",
      localField: "projectId",
      foreignField: "_id",
      as: "projects",
    },
  },

  { $unwind: "$department" },
  { $unwind: "$salary" },
  { $unwind: "$client" },
  { $unwind: "$address" },
  { $unwind: "$projects" },
  {
    $project: {
      name: 1,
      department_name: "$department.departmentName",
      salary: "$salary.salary",
      client_name: "$client.name",
      address: "$address.city",
      project: "$projects.name",
    },
  },
]);

// Intermediate
// Employee + Department + Salary.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
]);
// Employee + Project + Client.

db.employees.aggregate([
  {
    $lookup: {
      from: "projects",
      localField: "projectId",
      foreignField: "_id",
      as: "project",
    },
  },
  {
    $lookup: {
      from: "clients",
      localField: "clientId",
      foreignField: "_id",
      as: "client",
    },
  },
]);
// Employee + Department + Address.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "address",
    },
  },
]);
// Employee + Salary + Client.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  {
    $lookup: {
      from: "clients",
      localField: "clientId",
      foreignField: "_id",
      as: "client",
    },
  },
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
]);
// Employee + Salary + Department + Project.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  {
    $lookup: {
      from: "projects",
      localField: "projectId",
      foreignField: "_id",
      as: "project",
    },
  },
]);
// Find employees working on Banking project.
db.employees.aggregate([
  {
    $lookup: {
      from: "projects",
      localField: "projectId",
      foreignField: "_id",
      as: "projects",
    },
  },
  { $unwind: "$projects" },
  { $match: { "projects.name": "Banking" } },
  {
    $project: {
      name: "$name",
      project_name: "$projects.name",
    },
  },
]);
// Find employees working for Google.
db.employees.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "clientId",
      foreignField: "_id",
      as: "client",
    },
  },
  { $unwind: "$client" },
  {
    $match: {
      "client.name": "Google",
    },
  },
]);
// Find employees in Delhi department.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$department" },
  {
    $match: {
      "department.location": "Delhi",
    },
  },
]);
// Find employees whose manager is Amit Sharma.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$department" },
  { $match: { "department.manager": "Amit Sharma" } },
]);
// Find employees whose salary >70000.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  { $unwind: "$salary" },
  {
    $match: {
      "salary.salary": {
        $gt: 70000,
      },
    },
  },
]);

// Advanced
// Count employees department-wise after lookup.

db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$department" },
  {
    $group: {
      _id: "$department.departmentName",
      totalEmployees: { $count: {} },
    },
  },
]);
// Average salary department-wise.

db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$salary" },
  { $unwind: "$department" },
  {
    $group: {
      _id: "$department.departmentName",
      avg_salary: { $avg: "$salary.salary" },
    },
  },
]);
// Highest salary by department.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$salary" },
  { $unwind: "$department" },
  {
    $group: {
      _id: "$department.departmentName",
      highest_salary: { $max: "$salary.salary" },
    },
  },
]);
// Lowest salary by department.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$salary" },
  { $unwind: "$department" },
  {
    $group: {
      _id: "$department.departmentName",
      highest_salary: { $min: "$salary.salary" },
    },
  },
]);
// Project-wise employee count.
db.employees.aggregate([
  {
    $lookup: {
      from: "projects",
      localField: "projectId",
      foreignField: "_id",
      as: "projects",
    },
  },
  { $unwind: "$projects" },
  {
    $group: {
      _id: "$projects.name",
      total_count: { $count: {} },
    },
  },
]);
// Client-wise employee count.
db.employees.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "clientId",
      foreignField: "_id",
      as: "client",
    },
  },
  { $unwind: "$client" },
  {
    $group: {
      _id: "$client.name",
      total_emp: { $count: {} },
    },
  },
]);
// City-wise employee count.

db.employees.aggregate([
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "address",
    },
  },
  { $unwind: "$address" },
  {
    $group: {
      _id: "$address.city",
      total_emp: { $count: {} },
    },
  },
]);
// Department-wise total salary.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$department" },
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  { $unwind: "$salary" },
  {
    $group: {
      _id: "$department.departmentName",
      salary: { $sum: "$salary.salary" },
    },
  },
]);
// Department-wise average experience.

db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$department" },
  {
    $group: {
      _id: "$department.departmentName",
      avg_exp: { $avg: "$experience" },
    },
  },
]);
// Find departments having more than 2 employees.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  { $unwind: "$department" },
  {
    $group: {
      _id: "$department.departmentName",
      total_emp: { $count: {} },
    },
  },
  { $match: { total_emp: { $gt: 2 } } },
]);

// 50 $replaceRoot Interview Questions
// Basic
// Replace root with department.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department",
    },
  },
  {
    $unwind: "$department",
  },

  {
    $replaceRoot: {
      newRoot: "$department",
    },
  },
]);

// Replace root with salary.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  {
    $unwind: "$salary",
  },

  {
    $replaceRoot: {
      newRoot: "$salary",
    },
  },
]);
// Replace root with address.
db.employees.aggregate([
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "address",
    },
  },
  {
    $unwind: "$address",
  },

  {
    $replaceRoot: {
      newRoot: "$address",
    },
  },
]);
// Replace root with client.
db.employees.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "clientId",
      foreignField: "_id",
      as: "clients",
    },
  },
  {
    $unwind: "$clients",
  },

  {
    $replaceRoot: {
      newRoot: "$clients",
    },
  },
]);
// Replace root with project.
db.employees.aggregate([
  {
    $lookup: {
      from: "projects",
      localField: "projectId",
      foreignField: "_id",
      as: "projects",
    },
  },
  {
    $unwind: "$projects",
  },

  {
    $replaceRoot: {
      newRoot: "$projects",
    },
  },
]);

// Show only department object.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "departments",
    },
  },
  {
    $unwind: "$departments",
  },

  {
    $replaceRoot: {
      newRoot: "$departments",
    },
  },
]);
// Show only salary object.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salaries",
    },
  },
  {
    $unwind: "$salaries",
  },

  {
    $replaceRoot: {
      newRoot: "$salaries",
    },
  },
]);
// Show only address object.
db.employees.aggregate([
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "addresses",
    },
  },
  {
    $unwind: "$addresses",
  },

  {
    $replaceRoot: {
      newRoot: "$addresses",
    },
  },
]);
// Show only project object.
db.employees.aggregate([
  {
    $lookup: {
      from: "projectss",
      localField: "projectId",
      foreignField: "_id",
      as: "projectss",
    },
  },
  {
    $unwind: "$projectss",
  },

  {
    $replaceRoot: {
      newRoot: "$projectss",
    },
  },
]);

// Intermediate
// Replace employee with department.
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "departments",
    },
  },
  {
    $unwind: "$departments",
  },

  {
    $replaceRoot: {
      newRoot: "$departments",
    },
  },
]);

// Replace employee with salary.
db.employees.aggregate([
  {
    $lookup: {
      from: "salaries",
      localField: "salaryId",
      foreignField: "_id",
      as: "salary",
    },
  },
  {
    $unwind: "$salary",
  },

  {
    $replaceRoot: {
      newRoot: "$salary",
    },
  },
]);
// Replace employee with client.
db.employees.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "clientId",
      foreignField: "_id",
      as: "client",
    },
  },
  {
    $unwind: "$client",
  },

  {
    $replaceRoot: {
      newRoot: "$client",
    },
  },
]);
// Replace employee with address.
db.employees.aggregate([
  {
    $lookup: {
      from: "addresses",
      localField: "addressId",
      foreignField: "_id",
      as: "address",
    },
  },
  {
    $unwind: "$address",
  },

  {
    $replaceRoot: {
      newRoot: "$address",
    },
  },
]);
// Replace employee with project.
db.employees.aggregate([
  {
    $lookup: {
      from: "projects",
      localField: "projectId",
      foreignField: "_id",
      as: "projects",
    },
  },
  {
    $unwind: "$projects",
  },

  {
    $replaceRoot: {
      newRoot: "$projects",
    },
  },
]);
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "departmentId",
      foreignField: "_id",
      as: "department"
    }
  },
  {
    $unwind: "$department"
  },
  {
    $replaceRoot: {
      newRoot: {
        $mergeObjects: ["$$ROOT", "$department"]
      }
    }
  },
  {
    $project: {
      department: 0
    }
  }
])
// Merge employee + salary.
db.employees.aggregate([
    {
        $lookup:{
            from:"salaries",
            localField:"salaryId",
            foreignField:"_id",
            as:"salary"
        }
    },
    {$unwind:"$salary"},
    {
        $replaceRoot:{
            newRoot:{
                $mergeObjects:["$$ROOT","$salary"]
            }
        }
    }
])
// Merge employee + address.
db.employees.aggregate([
    {
        $lookup:{
            from:"addresses",
            localField:"addressId",
            foreignField:"_id",
            as:"address"
        }
    },
    {$unwind:"$address"},
    {
        $replaceRoot:{
            newRoot:{
                $mergeObjects:["$$ROOT","$address"]
            }
        }
    }
])
// Merge employee + client.
db.employees.aggregate([
    {
        $lookup:{
            from:"clients",
            localField:"clientId",
            foreignField:"_id",
            as:"client"
        }
    },
    {$unwind:"$client"},
    {
        $replaceRoot:{
            newRoot:{
                $mergeObjects:["$$ROOT","$client"]
            }
        }
    }
])
// Merge employee + project.
db.employees.aggregate([
    {
        $lookup:{
            from:"projects",
            localField:"projectId",
            foreignField:"_id",
            as:"project"
        }
    },
    {$unwind:"$project"},
    {
        $replaceRoot:{
            newRoot:{
                $mergeObjects:["$$ROOT","$project"]
            }
        }
    }
])