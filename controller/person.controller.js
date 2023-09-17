const mongoose = require("mongoose");
const { CustomError } = require("../middleware");
console.log(CustomError);
const { Person } = require("./../model/database");
let instance;
class PersonController {
  constructor() {
    if (instance) return instance;
    instance = this;
  }
  async createPerson(req, res) {
    let { name } = req.body;
    if (!name) throw new CustomError("name is required", 400);
    if (!!(await Person.countDocuments({ name })))
      throw new CustomError("person already exists", 400);
    if (isNaN(name) && typeof name == "string") {
      
      let person = await new Person({ ...req.body });
      await person.save();
      return res.status(201).json({
        msg: "created Successfully",
        status: 201,
        person,
      });
    } else {
      throw new CustomError("name must be a string", 400);
    }
  }
  async updatePerson(req, res) {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) throw new CustomError("invalid ID", 400);
    let _id = new mongoose.Types.ObjectId(id);
    let person = await Person.findOne({ _id });
    if (!person)
      throw new CustomError(
        "person you are trying to update doesnt exist",
        404
      );
    let version = person.__v;
    Object.assign(person, req.body);
    person.__v = version;
    person
      .save()
      .then(() =>
        res
          .status(200)
          .json({ msg: "updated successfully", status: 200, person })
      );
  }
  async deletePerson(req, res) {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) throw new CustomError("invalid ID", 400);
    let _id = new mongoose.Types.ObjectId(id);
    let person = await Person.findOneAndRemove({ _id });
    if (!person)
      throw new CustomError(
        "person you are trying to delete doesnt exist",
        404
      );
    return res.status(204);
  }
  async getOnePerson(req, res) {
    const { query } = req.params;

    let person = await Person.findOne({
      $or: [
        { name: query },
        { _id: (await mongoose.isValidObjectId(query)) ? query : null },
      ],
    });
    if (!person) throw new CustomError("person doesnt exist", 404);
    res.status(200).json({
      msg: "person fetched successfully",
      status: 200,
      person,
    });
  }
  async getAllPeople(req, res) {
    let people = await Person.find({});
    if (!people.length) throw new CustomError("no people found", 404);
    res.status(200).json({
      msg: "All people fetched successfully",
      status: 200,
      people,
    });
  }
}
let ControllerInstance = Object.freeze(new PersonController());
module.exports = ControllerInstance;
