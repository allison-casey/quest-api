import Armor from "../../../models/Armor";

export default {
  Query: {
    armor: (root, args) =>
      new Promise((resolve, reject) => {
        Armor.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      }),
    armors: () =>
      new Promise((resolve, reject) =>
        Armor.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          })
      )
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
