import Item from "../../models/Item";

export default {
  Query: {
    items: async () => await Item.find({}).populate()
  },
  Item: {
    __resolveType(item) {
      return item._type;
    }
  }
};
