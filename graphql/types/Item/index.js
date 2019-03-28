// export default `
//   type Item {
//     id: String!
//     name: String!
//     weight: Int!
//   }
//
//   type Query {
//     item(id: String!): Item
//     items: [Item]
//   }
//
//   type Mutation {
//     addItem(id: String!, name: String!, weight: Int!): Item
//     editItem(id: String, name: String, weight: Int): Item
//     deleteItem(id: String, name: String, weight: Int): Item
//   }
// `;

export default `
  union Item = Weapon | Armor

  type Query {
    items: [Item]
  }
`;
