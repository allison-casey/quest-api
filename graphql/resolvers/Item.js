import Item from "../../models/Item";

import {generateNumberFilter, generateStringFilter} from "./utils";

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
        ...generateNumberFilter(where.dt, "dt"),
        ...generateStringFilter(where.ammo, "ammo"),
        ...(where.dmg && {dmg: {$all: where.dmg}}),
        ...(where.traits && {traits: {$all: where.traits}})
      }).limit(where.limit)
  },
  Item: {
    __resolveType(item) {
      return item._type;
    }
  }
};
