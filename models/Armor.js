import {Schema, model} from "mongoose";
import Item from "./Item";

const Armor = Item.discriminator(
  "Armor",
  new Schema({
    type: {
      type: String,
      enum: ["CLOTHING", "LIGHT", "MEDIUM", "HEAVY", "POWER"],
      required: true
    },
    dt: {type: Number, required: true},
    value: {type: Number, required: true},
    weight: {type: Number, required: true},
    traits: {type: [String], required: true}
  })
);

// const Armor = model("armor");

export default Armor;
