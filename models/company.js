const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({

});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
