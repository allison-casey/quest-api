export default `
  union Item = Weapon | Armor

  input ItemWhere {
    name: String
  }

  type Query {
    items: [Item!]!
    findItems(where: ItemWhere): [Item!]!
  }
`;
