export default `
  type Melee {
    id: ID!
    name: String!
    type: MeleeType!
    handedness: Handedness!
    dmg: [String!]!
    acc: Int!
    str: Int!
    value: Int!
    weight: Int!
    traits: [String!]!
  }

  input MeleeAttributes {
    name: String!
    type: MeleeType!
    handedness: Handedness!
    dmg: [String!]!
    acc: Int!
    str: Int!
    value: Int!
    traits: [String!]!
  }

  enum MeleeType {
    UNARMED
    SLASH
    BLUNT
    PIERCE
  }

  enum Handedness {
    ONEHANDED
    TWOHANDED
  }

  type Mutation {
    addMelee(attributes: MeleeAttributes): Melee
    addMelees(attributeslist: [MeleeAttributes]): [Melee!]!
    updateMelee(id: id!, attributes: MeleeAttributes): Melee
    deleteMelee(id: id!): Melee
    deleteAllMelees: Int
  }

  type Query {
    melee(id: id!): Melee
    melees: [Melee!]!
  }

`;
