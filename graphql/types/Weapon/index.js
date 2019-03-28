export default `
  type Weapon {
    id: ID!
    name: String!
    dmg: Int!
    acc: Int!
    str: Int!
    value: Int!
    weight: Int!
  }

  type Query {
    weapon(id: ID!): Weapon
    weapons: [Weapon]
  }

  type Mutation {
    addWeapon(id: ID! name: String dmg: Int! acc: Int! str: Int! value: Int! weight: Int!): Weapon
  }
`;
