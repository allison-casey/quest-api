import {Schema, model} from "mongoose";

const baseOptions = {
  discriminatorKey: "_type",
  collection: "items"
};

const ItemSchema = model(
  "Item",
  new Schema(
    {
      id: {type: String, required: true, unique: true},
      name: {type: String, required: true}
    },
    baseOptions
  )
);

const Item = model("Item");

export default Item;

// const ItemSchema = new Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   weight: {
//     type: Number,
//     required: true
//   }
// });
//
// const Item = model("Item", ItemSchema);
