export default `
type Armor {
  id: ID!
  name: String!
  type: ArmorType!
  dt: Int!
  value: Int!
  weight: Int!
  traits: [String!]!
}

input ArmorAttributes {
  name: String!
  type: ArmorType!
  dt: Int!
  value: Int!
  weight: Int!
  traits: [String!]!
}

enum ArmorType {
  CLOTHING
  LIGHT
  MEDIUM
  HEAVY
  POWER
}

input ArmorWhere {
  name: String
  dt: IntFilterType
  value: IntFilterType
  weight: IntFilterType
  limit: Int
}
type Mutation {
  addArmor(attributes: ArmorAttributes): Armor
  addArmors(attributesList: [ArmorAttributes]): [Armor!]!
  updateArmor(id: ID!, attributes: ArmorAttributes): Armor
  deleteArmor(id: ID!): Armor
  deleteAllArmors: Int
}

type Query {
  armor(id: ID!): Armor
  armors: [Armor!]!
  findArmors(where: ArmorWhere): [Armor!]!
}

`;
