import {Schema, model} from "mongoose";

const baseOptions = {
  discriminatorKey: "_type",
  collection: "items"
};

const ItemSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    _name: {type: String, text: true}
  },
  baseOptions
);

ItemSchema.virtual("id").get(function() {
  return this._id;
});
ItemSchema.set("toJSON", {virtuals: true});
ItemSchema.pre("save", function(next) {
  this._name = name;
  next();
});

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
