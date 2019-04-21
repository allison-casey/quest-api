import Armor from "../../models/Armor";

export default {
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

    // addArmor: (root, {id, name, dt, value, weight}) => {
    //   const newArmor = new Armor({id, name, dt, value, weight});
    //   return new Promise((resolve, reject) => {
    //     newArmor.save((err, res) => {
    //       err ? reject(err) : resolve(res);
    //     });
    //   });
    // }
  }
};
