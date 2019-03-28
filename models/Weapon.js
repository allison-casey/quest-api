import {Schema, model} from "mongoose";
import Item from "./Item";

const WeaponSchema = Item.discriminator(
  "Weapon",
  new Schema({
    dmg: {type: Number, required: true},
    acc: {type: Number, required: true},
    str: {type: Number, required: true},
    value: {type: Number, required: true},
    weight: {type: Number, required: true}
  })
);

const Weapon = model("Weapon");

export default Weapon;
