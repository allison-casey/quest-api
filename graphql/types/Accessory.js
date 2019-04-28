export default `
  type Accessory {
    id: ID!
    name: String!
    area: AreaType
    availableWeapons: String
    type: AccessoryType
    value: Int!
    weight: Int!
    traits: [String!]!
  }

  enum AccessoryType {
    ARMORACCESSORY
    FACEACCESSORY
    MELEEMODACCESSORY
    GUNMODACCESSORY
  }

  enum AreaType {
    EYES
    MOUTH
    FACE
    BACK
    BODY
    HIP
    WRIST
    UPPERRAIL
    LOWERRAIL
    MAGAZINE
    BARREL
  }

  input AccessoryAttributes {
    name: String!
    dt: Int!
    def: Int!
    str: Int!
    value: Int!
    weight: Int!
    traits: [String!]!
  }


  type Mutation {
    addAccessory(attributes: AccessoryAttributes): Accessory
    addAccessorys(attributeslist: [AccessoryAttributes]): [Accessory!]!
    updateAccessory(id: id!, attributes: AccessoryAttributes): Accessory
    deleteAccessory(id: id!): Accessory
    deleteAllAccessorys: Int
  }

  type Query {
    accessory(id: id!): Accessory
    accessorys: [Accessory!]!
  }

`;
