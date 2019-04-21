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
`;
