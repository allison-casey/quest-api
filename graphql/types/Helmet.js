export default `
  type Helmet {
    id: ID!
    name: String!
    value: Int!
    weight: Int!
    traits: [String!]!
  }

  input HelmetAttributes {
    name: String!
    dt: Int!
    value: Int!
    weight: Int!
    traits: [String!]!
  }

  enum HelmetType {
    HATS
    LIGHTHELMET
    MEDIUMHELMET
    HEAVYHELMET
    POWERHELMET
  }

  type Mutation {
    addHelmet(attributes: HelmetAttributes): Helmet
    addHelmets(attributeslist: [HelmetAttributes]): [Helmet!]!
    updateHelmet(id: id!, attributes: Helmetattributes): Helmet
    deleteHelmet(id: id!): Helmet
    deleteAllHelmets: Int
  }

  type Query {
    helmet(id: id!): Helmet
    helmets: [Helmet!]!
  }

`;
