import Armor from "../../models/Armor";

export default {
  Query: {
    armor: async (parent, args) => await Armor.findOne(args),
    armors: async (parent, args) => await Armor.find({}).populate()
  },
  Mutation: {
    addArmor: (root, {id, name, dt, value, weight}) => {
      const newArmor = new Armor({id, name, dt, value, weight});
      return new Promise((resolve, reject) => {
        newArmor.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
