const mongoose = require("mongoose");
const {Person}=require('./Person')
async function db() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected successfully`);
  } catch (error) {
    console.error(`an error occured connecting to db  ${error.message}`);
  }
}
module.exports = {Person};
db();
