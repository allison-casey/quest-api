import Armor from "../../models/Armor";
import {generateCrudResolvers, generateNumberFilter} from "./utils";

const resolver = generateCrudResolvers(Armor, "armor");

resolver.Query.findArmors = async (root, {where = {}}) => {
  const search = {
    ...(where.name && {$text: {$search: where.name}}),
    ...generateNumberFilter(where.value, "value"),
    ...generateNumberFilter(where.dt, "dt"),
    ...generateNumberFilter(where.weight, "weight")
  };
  return await Armor.find(search).limit(where.limit);
};

export default resolver;
