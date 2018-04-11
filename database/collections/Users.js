const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
   firstName: { type: String },
   lastName: { type: String },
   email: { type: String },
});

module.exports = {
    Users: mongoose.model("Users", userSchema)
};