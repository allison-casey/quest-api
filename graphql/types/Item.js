export default `
  union Item = Weapon | Armor

  input ItemWhere {
    name: String
    limit: Int
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
