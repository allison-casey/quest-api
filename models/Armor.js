import {Schema, model} from "mongoose";
import Item from "./Item";

const ArmorSchema = Item.discriminator(
  "Armor",
  new Schema({
    dt: {type: Number, required: true},
    value: {type: Number, required: true},
    weight: {type: Number, required: true}
  })
);

const Armor = model("Armor");

export default Armor;
