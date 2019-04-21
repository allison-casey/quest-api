import {mergeTypes} from "merge-graphql-schemas";

import Item from "./Item";
import Armor from "./Armor";
import Weapon from "./Weapon";

const typeDefs = [Item, Armor, Weapon];

export default mergeTypes(typeDefs, {all: true});
