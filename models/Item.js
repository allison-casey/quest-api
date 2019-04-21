import {Schema, model} from "mongoose";

const baseOptions = {
  discriminatorKey: "_type",
  collection: "items"
};

const ItemSchema = new Schema(
  {
    name: {type: String, required: true}
  },
  baseOptions
);

ItemSchema.virtual("id").get(function() {
  return this._id;
});
ItemSchema.set("toJSON", {virtuals: true});

const Item = model("item", ItemSchema);

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
