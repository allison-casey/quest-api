import Armor from "../../models/Armor";

const resolver = {
  Query: {
    armor: async (parent, {id}) => await Armor.findById(id),
    armors: async (parent, args) => await Armor.find({}).populate()
  },
  Mutation: {
    addArmor: async (root, {attributes}) => await new Armor(attributes).save(),
    addArmors: async (root, {attributesList}) =>
      await Armor.insertMany(attributesList),
    deleteAllArmors: async (root, args) => await Armor.deleteMany(),
    deleteArmor: async (root, {id}) => await Armor.findByIdAndRemove(id),
    updateArmor: async (root, args) =>
      await Armor.findByIdAndUpdate(args.id, args)
  }
};

const COMPARITOR_LOOKUP = {
  LT: "$lt",
  LE: "$lte",
  EQ: "$eq",
  GE: "$gte",
  GT: "$gt",
  NE: "$ne"
};

const generateNumberFilter = (value, valueStr) =>
  value && {[valueStr]: {[COMPARITOR_LOOKUP[value.comparitor]]: value.input}};

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
