const COMPARITOR_LOOKUP = {
  LT: "$lt",
  LE: "$lte",
  EQ: "$eq",
  GE: "$gte",
  GT: "$gt",
  NE: "$ne"
};

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const generateNumberFilter = (value, valueStr) =>
  value && {[valueStr]: {[COMPARITOR_LOOKUP[value.comparitor]]: value.input}};

export const generateCrudResolvers = (model, modelStr) => ({
  Query: {
    [modelStr]: async (parent, {id}) => await model.findById(id),
    [modelStr + "s"]: async (parent, args) => await model.find({}).populate()
  },
  Mutation: {
    ["add" + capitalize(modelStr)]: async (root, {attributes}) =>
      await new model(attributes).save(),
    ["add" + capitalize(modelStr) + "s"]: async (root, {attributesList}) =>
      await model.insertMany(attributesList),
    ["deleteAll" + capitalize(modelStr) + "s"]: async (root, args) =>
      (await model.deleteMany({_type: modelStr})).n,
    ["delete" + capitalize(modelStr)]: async (root, {id}) =>
      await model.findByIdAndRemove(id),
    ["update" + capitalize(modelStr)]: async (root, args) =>
      await model.findByIdAndUpdate(args.id, args)
  }
});
