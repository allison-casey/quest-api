export default `
enum ComparisonOperator {
  LT
  LE
  EQ
  GE
  GT
  NE
}

input IntFilterType {
  comparitor: ComparisonOperator!
  input: Int!
}
`;
