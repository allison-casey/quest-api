import Weapon from "../../../models/Weapon";
export default {
  Query: {
    weapon: (root, args) =>
      new Promise((resolve, reject) => {
        Weapon.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      }),
    weapons: () =>
      new Promise((resolve, reject) =>
        Weapon.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          })
      )
  },
  Mutation: {
    addWeapon: (root, {id, name, dmg, acc, str, value, weight}) => {
      const newWeapon = new Weapon({id, name, dmg, acc, str, value, weight});
      return new Promise((resolve, reject) => {
        newWeapon.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
