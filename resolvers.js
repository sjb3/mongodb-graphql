export default {
  Query: {
    // { _id: 123456, name: 'whatever' }
    allCats: async (parent, args, { Cat }) => {
      const cats = await Cat.find();
      return cats.map((i) => {
        i._id = i._id.toString();
        return i;
      });
    },
  },
  Mutation: {
    createCat: async (parent, args, { Cat }) => {
      const kitty = await new Cat(args).save();
      kitty._id = kitty._id.toString();
      return kitty;
    },
  },
};

