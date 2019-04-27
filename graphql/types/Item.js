export default `
  union Item = Weapon | Armor

  input ItemWhere {
    name: String
    limit: Int
    ammo: String
    dmg: [String!]
    traits: [String!]
    value: IntFilterType
    acc: IntFilterType
    str: IntFilterType
    mag: IntFilterType
    weight: IntFilterType
    dt: IntFilterType

  }

  type Query {
    items: [Item!]!
    findItems(where: ItemWhere): [Item!]!
  }
`;
