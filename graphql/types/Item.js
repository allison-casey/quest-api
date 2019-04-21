export default `
  union Item = Weapon | Armor

  type Query {
    items: [Item!]!
  }
`;
