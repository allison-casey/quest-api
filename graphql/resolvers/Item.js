import Item from "../../models/Item";

import {generateNumberFilter} from "./utils";

export default {
  Query: {
    items: async () => await Item.find({}).populate(),
    findItems: async (parent, {where = {}}) =>
      await Item.find({
        ...(where.name && {$text: {$search: where.name}}),
        ...generateNumberFilter(where.value, "value"),
        ...generateNumberFilter(where.acc, "acc"),
        ...generateNumberFilter(where.str, "str"),
        ...generateNumberFilter(where.mag, "mag"),
        ...generateNumberFilter(where.weight, "weight"),
        ...generateNumberFilter(where.dt, "dt")
      }).limit(where.limit)
  },
  Item: {
    __resolveType(item) {
      return item._type;
    }
  }
};
