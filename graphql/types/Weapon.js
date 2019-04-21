export default `
  type Weapon {
  id: ID!
  name: String!
  dmg: [String!]!
  acc: Int!
  str: Int!
  mag: Int!
  ammo: String!
  value: Int!
  weight: Int!
  traits: [String!]!
}

input WeaponAttributes {
  name: String!
  dmg: [String!]!
  acc: Int!
  str: Int!
  value: Int!
  mag: Int!
  ammo: String!
  weight: Int!
  traits: [String!]!
}

input WeaponWhere {
  name: String
  value: IntFilterType
  acc: IntFilterType
  str: IntFilterType
  mag: IntFilterType
  weight: IntFilterType
  limit: Int
}
type Mutation {
  addWeapon(attributes: WeaponAttributes): Weapon
  addWeapons(attributesList: [WeaponAttributes]): [Weapon!]!
  updateWeapon(id: ID!, attributes: WeaponAttributes): Weapon
  deleteWeapon(id: ID!): Weapon
  deleteAllWeapons: Int
}

type Query {
  weapon(id: ID!): Weapon
  weapons: [Weapon!]!
  findWeapons(where: WeaponWhere): [Weapon!]!
}
`;
