const express = require('express');
const router = express.Router();
router.use(express.json());

// Import the Employee model
let Employee = require('../models/Employee');

// Route to get all employees
router.route('/employees').get((req, res) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route to add a new employee
router.route('/employees').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const designation = req.body.designation;
    const salary = req.body.salary;
    const joinDate = req.body.joinDate;
    const isActive = req.body.isActive;
    const profileImage = req.body.profileImage;
    const address = req.body.address;
    const skills = req.body.skills;
    const createdAt = req.body.createdAt;

    const newEmployee = new Employee({
        name,
        email,
        designation,
        salary,
        joinDate,
        isActive,
        profileImage,
        address,
        skills,
        createdAt
    });

    newEmployee.save()
        .then(() => res.json('Employee Added Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));

});

// Route to get a specific employee by ID
router.route('/employees/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route to update a specific employee by ID
router.route('/employees/:id').put((req, res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            employee.name = req.body.name;
            employee.email = req.body.email;
            employee.designation = req.body.designation;
            employee.salary = req.body.salary;
            employee.joinDate = req.body.joinDate;
            employee.isActive = req.body.isActive;
            employee.profileImage = req.body.profileImage;
            employee.address = req.body.address;
            employee.skills = req.body.skills;
            employee.createdAt = req.body.createdAt;

            employee.save()
                .then(() => res.json('Employee Updated Successfully'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

// Route to update a specific employee by ID
router.route('/employees/:id').patch((req, res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            employee.name = req.body.name;
            employee.email = req.body.email;
            employee.designation = req.body.designation;
            employee.salary = req.body.salary;
            employee.joinDate = req.body.joinDate;
            employee.isActive = req.body.isActive;
            employee.profileImage = req.body.profileImage;
            employee.address = req.body.address;
            employee.skills = req.body.skills;
            employee.createdAt = req.body.createdAt;

            employee.save()
                .then(() => res.json('Employee Updated Successfully', employee))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

// Route to delete a specific employee by ID
router.route('/employees/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee Deleted Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;