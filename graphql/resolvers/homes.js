const { UserInputError } = require("apollo-server");

const Home = require("../../models/Home");

require("dotenv").config();

module.exports = {
  Query: {
    async getHomes() {
      try {
        const homes = await Home.find();
        return homes;
      } catch (err) {
        throw new Error(err);
      }
    }

  },
  Mutation: {
    async addHome(
      _,
      {
        homeInput: {photo, address, price, description}
      }
    ){
      const newHome = new Home({
        photo, address, price, description
      });

      await newHome.save();

      return true;
    }

  }

};
