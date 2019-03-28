export default `
  type Armor {
    id: ID!
    name: String!
    dt: Int!
    value: Int!
    weight: Int!
  }


  type Query {
    armor(id: ID!): Armor
    armors: [Armor]
  }

  type Mutation {
    addArmor(id: ID! name: String! dt: Int! value: Int! weight: Int!): Armor
  }
`;
