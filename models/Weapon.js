import {Schema, model} from "mongoose";
import Item from "./Item";

const Weapon = Item.discriminator(
  "weapon",
  new Schema({
    mag: {type: Number, required: true},
    ammo: {type: String, required: true},
    traits: {type: [String], required: true},
    dmg: {type: [String], required: true},
    acc: {type: Number, required: true},
    str: {type: Number, required: true},
    value: {type: Number, required: true},
    weight: {type: Number, required: true}
  })
);

// const Weapon = model("weapon");

export default Weapon;
