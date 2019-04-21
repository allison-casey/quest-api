import Weapon from "../../models/Weapon";
import {generateCrudResolvers, generateNumberFilter} from "./utils";

const resolver = generateCrudResolvers(Weapon, "weapon");

export default resolver;
