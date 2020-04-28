const homesResolvers = require("./homes.js");

module.exports = {
  Query: {
    ...homesResolvers.Query
  },
  Mutation: {
    ...homesResolvers.Mutation
  }
};
