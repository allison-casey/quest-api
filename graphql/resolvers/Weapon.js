import Weapon from "../../models/Weapon";
import {generateCrudResolvers, generateNumberFilter} from "./utils";

const resolver = generateCrudResolvers(Weapon, "weapon");

resolver.Query.findWeapons = async (root, {where = {}}) => {
  const search = {
    ...(where.name && {$text: {$search: where.name}}),
    ...generateNumberFilter(where.value, "value"),
    ...generateNumberFilter(where.acc, "acc"),
    ...generateNumberFilter(where.str, "str"),
    ...generateNumberFilter(where.mag, "mag"),
    ...generateNumberFilter(where.weight, "weight")
  };
  const ret = await Weapon.find(search).limit(where.limit);
};

export default resolver;
