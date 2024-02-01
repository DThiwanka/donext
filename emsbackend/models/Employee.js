const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true

    },

    designation: {
        type: String,
        required: true

    },

    salary: [
        {
            currency: {
                type: String,
                required: true
            },

            value: {
                type: Number,
                required: true
            }
        }
    ],

    joinDate: {
        type: Date,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true
    },

    profileImage: {
        type: String,
        required: true
    },

    address:[{
        street: {
            type: String,
            required: true
        },
    
        city: {
            type: String,
            required: true
        },
    
        zipCode: {
            type: String,
            required: true
        }
    }],
    
    skills: { type: Array, "default": [] },
    
    createdAt: {
        type: Date,
        default: Date.now
    }


});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;