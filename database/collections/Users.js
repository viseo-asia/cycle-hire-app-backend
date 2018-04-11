const mongoose = require('mongoose');

const { Schema: { Types }, model } = mongoose;

const userSchema = new Schema({
   firstName: { type: String },
   lastName: { type: String },
   email: { type: String },
});

module.exports = {
    Users: model("Users", userSchema)
};