import {Schema, model} from "mongoose";

const baseOptions = {
  discriminatorKey: "_type",
  collection: "items"
};

const ItemSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    _name: {type: String, text: true, index: true, required: true}
  },
  baseOptions
);

ItemSchema.index({_name: "text"});
ItemSchema.virtual("id").get(function() {
  return this._id;
});
ItemSchema.set("toJSON", {virtuals: true});
ItemSchema.pre("validate", function(next) {
  this._name = this.name;
  next();
});

const Item = model("item", ItemSchema);

export default Item;
