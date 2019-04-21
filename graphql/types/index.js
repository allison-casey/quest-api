import {mergeTypes} from "merge-graphql-schemas";

import Globals from "./Globals";
import Item from "./Item";
import Armor from "./Armor";
import Weapon from "./Weapon";

const typeDefs = [Globals, Item, Armor, Weapon];

export default mergeTypes(typeDefs, {all: true});
