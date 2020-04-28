const { model, Schema } = require("mongoose");

const classSchema = new Schema({
    address: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String
    },
    price: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      default: ""
    }
})

module.exports = model("Home", classSchema);
