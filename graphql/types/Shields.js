export default `
  type Shield {
    id: ID!
    name: String!
    dt: Int!
    def: Int!
    str: Int!
    value: Int!
    weight: Int!
    traits: [String!]!
  }

  input ShieldAttributes {
    name: String!
    dt: Int!
    def: Int!
    str: Int!
    value: Int!
    weight: Int!
    traits: [String!]!
  }


  type Mutation {
    addShield(attributes: ShieldAttributes): Shield
    addShields(attributeslist: [ShieldAttributes]): [Shield!]!
    updateShield(id: id!, attributes: ShieldAttributes): Shield
    deleteShield(id: id!): Shield
    deleteAllShields: Int
  }

  type Query {
    shield(id: id!): Shield
    shields: [Shield!]!
  }

`;
