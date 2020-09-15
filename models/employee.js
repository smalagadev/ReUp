const mongoose = required("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
