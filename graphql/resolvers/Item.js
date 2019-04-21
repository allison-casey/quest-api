import Item from "../../models/Item";

export default {
  Query: {
    items: () =>
      new Promise((resolve, reject) =>
        Item.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          })
      )
  },
  Item: {
    __resolveType(item) {
      return item._type;
    }
  }
};
