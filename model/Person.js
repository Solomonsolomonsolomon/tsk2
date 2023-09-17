const { Schema, Types, model } = require("mongoose");

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  age: String,
});
const Person = model("Person", personSchema);
module.exports = { Person };
