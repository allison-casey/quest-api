import {mergeResolvers} from "merge-graphql-schemas";

import Item from "./Item";
import Armor from "./Armor";
import Weapon from "./Weapon";

const resolvers = [Armor, Item, Weapon];

export default mergeResolvers(resolvers);
