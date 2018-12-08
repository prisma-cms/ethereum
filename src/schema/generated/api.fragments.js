// THIS FILE HAS BEEN AUTO-GENERATED BY "graphql-cli-generate-fragments"
// DO NOT EDIT THIS FILE DIRECTLY

export const AggregateEthDeployedContractFragment = `fragment AggregateEthDeployedContract on AggregateEthDeployedContract {
  count
}
`

export const EthTransactionPreviousValuesFragment = `fragment EthTransactionPreviousValues on EthTransactionPreviousValues {
  id
  createdAt
  updatedAt
  address
  type
}
`

export const EthTransactionConnectionFragment = `fragment EthTransactionConnection on EthTransactionConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...EthTransactionEdgeNoNesting
  }
  aggregate {
    ...AggregateEthTransactionNoNesting
  }
}
`

export const LogFragment = `fragment Log on Log {
  id
  level
  objectType
  message
  stack
}
`

export const EthTransactionEdgeFragment = `fragment EthTransactionEdge on EthTransactionEdge {
  node {
    ...EthTransactionNoNesting
  }
  cursor
}
`

export const UserGroupFragment = `fragment UserGroup on UserGroup {
  id
  name
  Users {
    ...UserNoNesting
  }
}
`

export const AggregateEthTransactionFragment = `fragment AggregateEthTransaction on AggregateEthTransaction {
  count
}
`

export const EthContractFragment = `fragment EthContract on EthContract {
  id
  createdAt
  updatedAt
  name
  description
  source
  CreatedBy {
    ...UserNoNesting
  }
  Deployed {
    ...EthDeployedContractNoNesting
  }
}
`

export const ethNetFragment = `fragment ethNet on ethNet {
  id
  isListening
  peerCount
}
`

export const EthAccountFragment = `fragment EthAccount on EthAccount {
  id
  address
  CreatedBy {
    ...UserNoNesting
  }
  balance
}
`

export const EthPersonalAccountFragment = `fragment EthPersonalAccount on EthPersonalAccount {
  address
  balance
}
`

export const LogConnectionFragment = `fragment LogConnection on LogConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...LogEdgeNoNesting
  }
  aggregate {
    ...AggregateLogNoNesting
  }
}
`

export const ethSyncStateFragment = `fragment ethSyncState on ethSyncState {
  startingBlock
  currentBlock
  highestBlock
  knownStates
  pulledStates
}
`

export const LogEdgeFragment = `fragment LogEdge on LogEdge {
  node {
    ...LogNoNesting
  }
  cursor
}
`

export const BatchPayloadFragment = `fragment BatchPayload on BatchPayload {
  count
}
`

export const UserConnectionFragment = `fragment UserConnection on UserConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...UserEdgeNoNesting
  }
  aggregate {
    ...AggregateUserNoNesting
  }
}
`

export const AuthPayloadFragment = `fragment AuthPayload on AuthPayload {
  success
  message
  token
  data {
    ...UserNoNesting
  }
}
`

export const AggregateUserFragment = `fragment AggregateUser on AggregateUser {
  count
}
`

export const ErrorFragment = `fragment Error on Error {
  key
  message
}
`

export const UserGroupEdgeFragment = `fragment UserGroupEdge on UserGroupEdge {
  node {
    ...UserGroupNoNesting
  }
  cursor
}
`

export const UserResponseFragment = `fragment UserResponse on UserResponse {
  success
  message
  data {
    ...UserNoNesting
  }
}
`

export const LogedInConnectionFragment = `fragment LogedInConnection on LogedInConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...LogedInEdgeNoNesting
  }
  aggregate {
    ...AggregateLogedInNoNesting
  }
}
`

export const EthContractResponseFragment = `fragment EthContractResponse on EthContractResponse {
  success
  message
  data {
    ...EthContractNoNesting
  }
}
`

export const AggregateLogedInFragment = `fragment AggregateLogedIn on AggregateLogedIn {
  count
}
`

export const EthPersonalAccountResponseFragment = `fragment EthPersonalAccountResponse on EthPersonalAccountResponse {
  success
  message
  data {
    ...EthPersonalAccountNoNesting
  }
}
`

export const EthAccountEdgeFragment = `fragment EthAccountEdge on EthAccountEdge {
  node {
    ...EthAccountNoNesting
  }
  cursor
}
`

export const EthTransactionResponseFragment = `fragment EthTransactionResponse on EthTransactionResponse {
  success
  message
  data {
    ...EthTransactionNoNesting
  }
}
`

export const EthContractConnectionFragment = `fragment EthContractConnection on EthContractConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...EthContractEdgeNoNesting
  }
  aggregate {
    ...AggregateEthContractNoNesting
  }
}
`

export const LogSubscriptionPayloadFragment = `fragment LogSubscriptionPayload on LogSubscriptionPayload {
  mutation
  node {
    ...LogNoNesting
  }
  updatedFields
  previousValues {
    ...LogPreviousValuesNoNesting
  }
}
`

export const AggregateEthContractFragment = `fragment AggregateEthContract on AggregateEthContract {
  count
}
`

export const LogPreviousValuesFragment = `fragment LogPreviousValues on LogPreviousValues {
  id
  level
  objectType
  message
  stack
}
`

export const EthDeployedContractEdgeFragment = `fragment EthDeployedContractEdge on EthDeployedContractEdge {
  node {
    ...EthDeployedContractNoNesting
  }
  cursor
}
`

export const UserSubscriptionPayloadFragment = `fragment UserSubscriptionPayload on UserSubscriptionPayload {
  mutation
  node {
    ...UserNoNesting
  }
  updatedFields
  previousValues {
    ...UserPreviousValuesNoNesting
  }
}
`

export const LogedInFragment = `fragment LogedIn on LogedIn {
  id
  createdAt
  fake
  User {
    ...UserNoNesting
  }
}
`

export const UserPreviousValuesFragment = `fragment UserPreviousValues on UserPreviousValues {
  id
  createdAt
  updatedAt
  username
  email
  phone
  showEmail
  showPhone
  password
  fullname
  image
  address
  sudo
  active
  activated
  deleted
}
`

export const EthTransactionFragment = `fragment EthTransaction on EthTransaction {
  id
  createdAt
  updatedAt
  address
  type
  CreatedBy {
    ...UserNoNesting
  }
}
`

export const UserGroupSubscriptionPayloadFragment = `fragment UserGroupSubscriptionPayload on UserGroupSubscriptionPayload {
  mutation
  node {
    ...UserGroupNoNesting
  }
  updatedFields
  previousValues {
    ...UserGroupPreviousValuesNoNesting
  }
}
`

export const AggregateLogFragment = `fragment AggregateLog on AggregateLog {
  count
}
`

export const UserGroupPreviousValuesFragment = `fragment UserGroupPreviousValues on UserGroupPreviousValues {
  id
  name
}
`

export const UserGroupConnectionFragment = `fragment UserGroupConnection on UserGroupConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...UserGroupEdgeNoNesting
  }
  aggregate {
    ...AggregateUserGroupNoNesting
  }
}
`

export const LogedInSubscriptionPayloadFragment = `fragment LogedInSubscriptionPayload on LogedInSubscriptionPayload {
  mutation
  node {
    ...LogedInNoNesting
  }
  updatedFields
  previousValues {
    ...LogedInPreviousValuesNoNesting
  }
}
`

export const LogedInEdgeFragment = `fragment LogedInEdge on LogedInEdge {
  node {
    ...LogedInNoNesting
  }
  cursor
}
`

export const LogedInPreviousValuesFragment = `fragment LogedInPreviousValues on LogedInPreviousValues {
  id
  createdAt
  fake
}
`

export const AggregateEthAccountFragment = `fragment AggregateEthAccount on AggregateEthAccount {
  count
}
`

export const EthAccountSubscriptionPayloadFragment = `fragment EthAccountSubscriptionPayload on EthAccountSubscriptionPayload {
  mutation
  node {
    ...EthAccountNoNesting
  }
  updatedFields
  previousValues {
    ...EthAccountPreviousValuesNoNesting
  }
}
`

export const EthDeployedContractConnectionFragment = `fragment EthDeployedContractConnection on EthDeployedContractConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...EthDeployedContractEdgeNoNesting
  }
  aggregate {
    ...AggregateEthDeployedContractNoNesting
  }
}
`

export const EthAccountPreviousValuesFragment = `fragment EthAccountPreviousValues on EthAccountPreviousValues {
  id
  address
}
`

export const EthDeployedContractFragment = `fragment EthDeployedContract on EthDeployedContract {
  id
  createdAt
  updatedAt
  name
  description
  source
  bytecode
  abi
  txHash
  address
  CreatedBy {
    ...UserNoNesting
  }
  Contract {
    ...EthContractNoNesting
  }
}
`

export const EthContractSubscriptionPayloadFragment = `fragment EthContractSubscriptionPayload on EthContractSubscriptionPayload {
  mutation
  node {
    ...EthContractNoNesting
  }
  updatedFields
  previousValues {
    ...EthContractPreviousValuesNoNesting
  }
}
`

export const UserEdgeFragment = `fragment UserEdge on UserEdge {
  node {
    ...UserNoNesting
  }
  cursor
}
`

export const EthAccountConnectionFragment = `fragment EthAccountConnection on EthAccountConnection {
  pageInfo {
    ...PageInfoNoNesting
  }
  edges {
    ...EthAccountEdgeNoNesting
  }
  aggregate {
    ...AggregateEthAccountNoNesting
  }
}
`

export const EthTransactionSubscriptionPayloadFragment = `fragment EthTransactionSubscriptionPayload on EthTransactionSubscriptionPayload {
  mutation
  node {
    ...EthTransactionNoNesting
  }
  updatedFields
  previousValues {
    ...EthTransactionPreviousValuesNoNesting
  }
}
`

export const EthDeployedContractPreviousValuesFragment = `fragment EthDeployedContractPreviousValues on EthDeployedContractPreviousValues {
  id
  createdAt
  updatedAt
  name
  description
  source
  bytecode
  abi
  txHash
  address
}
`

export const EthDeployedContractSubscriptionPayloadFragment = `fragment EthDeployedContractSubscriptionPayload on EthDeployedContractSubscriptionPayload {
  mutation
  node {
    ...EthDeployedContractNoNesting
  }
  updatedFields
  previousValues {
    ...EthDeployedContractPreviousValuesNoNesting
  }
}
`

export const EthContractPreviousValuesFragment = `fragment EthContractPreviousValues on EthContractPreviousValues {
  id
  createdAt
  updatedAt
  name
  description
  source
}
`

export const EthContractEdgeFragment = `fragment EthContractEdge on EthContractEdge {
  node {
    ...EthContractNoNesting
  }
  cursor
}
`

export const AggregateUserGroupFragment = `fragment AggregateUserGroup on AggregateUserGroup {
  count
}
`

export const PageInfoFragment = `fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
`

export const UserFragment = `fragment User on User {
  id
  createdAt
  updatedAt
  username
  email
  phone
  showEmail
  showPhone
  password
  fullname
  image
  address
  sudo
  active
  activated
  deleted
  Groups {
    ...UserGroupNoNesting
  }
  CreatedUsers {
    ...UserNoNesting
  }
  CreatedBy {
    ...UserNoNesting
  }
  LogedIns {
    ...LogedInNoNesting
  }
  EthContractsCreated {
    ...EthContractNoNesting
  }
  EthContractsDeployed {
    ...EthDeployedContractNoNesting
  }
  EthAccounts {
    ...EthAccountNoNesting
  }
  EthTransactions {
    ...EthTransactionNoNesting
  }
  hasEmail
  hasPhone
}
`


export const AggregateEthDeployedContractNoNestingFragment = `fragment AggregateEthDeployedContractNoNesting on AggregateEthDeployedContract {
  count
}
`

export const EthTransactionPreviousValuesNoNestingFragment = `fragment EthTransactionPreviousValuesNoNesting on EthTransactionPreviousValues {
  id
  createdAt
  updatedAt
  address
  type
}
`

export const LogNoNestingFragment = `fragment LogNoNesting on Log {
  id
  level
  objectType
  message
  stack
}
`

export const EthTransactionEdgeNoNestingFragment = `fragment EthTransactionEdgeNoNesting on EthTransactionEdge {
  cursor
}
`

export const UserGroupNoNestingFragment = `fragment UserGroupNoNesting on UserGroup {
  id
  name
}
`

export const AggregateEthTransactionNoNestingFragment = `fragment AggregateEthTransactionNoNesting on AggregateEthTransaction {
  count
}
`

export const EthContractNoNestingFragment = `fragment EthContractNoNesting on EthContract {
  id
  createdAt
  updatedAt
  name
  description
  source
}
`

export const ethNetNoNestingFragment = `fragment ethNetNoNesting on ethNet {
  id
  isListening
  peerCount
}
`

export const EthAccountNoNestingFragment = `fragment EthAccountNoNesting on EthAccount {
  id
  address
  balance
}
`

export const EthPersonalAccountNoNestingFragment = `fragment EthPersonalAccountNoNesting on EthPersonalAccount {
  address
  balance
}
`

export const ethSyncStateNoNestingFragment = `fragment ethSyncStateNoNesting on ethSyncState {
  startingBlock
  currentBlock
  highestBlock
  knownStates
  pulledStates
}
`

export const LogEdgeNoNestingFragment = `fragment LogEdgeNoNesting on LogEdge {
  cursor
}
`

export const BatchPayloadNoNestingFragment = `fragment BatchPayloadNoNesting on BatchPayload {
  count
}
`

export const AuthPayloadNoNestingFragment = `fragment AuthPayloadNoNesting on AuthPayload {
  success
  message
  token
}
`

export const AggregateUserNoNestingFragment = `fragment AggregateUserNoNesting on AggregateUser {
  count
}
`

export const ErrorNoNestingFragment = `fragment ErrorNoNesting on Error {
  key
  message
}
`

export const UserGroupEdgeNoNestingFragment = `fragment UserGroupEdgeNoNesting on UserGroupEdge {
  cursor
}
`

export const UserResponseNoNestingFragment = `fragment UserResponseNoNesting on UserResponse {
  success
  message
}
`

export const EthContractResponseNoNestingFragment = `fragment EthContractResponseNoNesting on EthContractResponse {
  success
  message
}
`

export const AggregateLogedInNoNestingFragment = `fragment AggregateLogedInNoNesting on AggregateLogedIn {
  count
}
`

export const EthPersonalAccountResponseNoNestingFragment = `fragment EthPersonalAccountResponseNoNesting on EthPersonalAccountResponse {
  success
  message
}
`

export const EthAccountEdgeNoNestingFragment = `fragment EthAccountEdgeNoNesting on EthAccountEdge {
  cursor
}
`

export const EthTransactionResponseNoNestingFragment = `fragment EthTransactionResponseNoNesting on EthTransactionResponse {
  success
  message
}
`

export const LogSubscriptionPayloadNoNestingFragment = `fragment LogSubscriptionPayloadNoNesting on LogSubscriptionPayload {
  mutation
  updatedFields
}
`

export const AggregateEthContractNoNestingFragment = `fragment AggregateEthContractNoNesting on AggregateEthContract {
  count
}
`

export const LogPreviousValuesNoNestingFragment = `fragment LogPreviousValuesNoNesting on LogPreviousValues {
  id
  level
  objectType
  message
  stack
}
`

export const EthDeployedContractEdgeNoNestingFragment = `fragment EthDeployedContractEdgeNoNesting on EthDeployedContractEdge {
  cursor
}
`

export const UserSubscriptionPayloadNoNestingFragment = `fragment UserSubscriptionPayloadNoNesting on UserSubscriptionPayload {
  mutation
  updatedFields
}
`

export const LogedInNoNestingFragment = `fragment LogedInNoNesting on LogedIn {
  id
  createdAt
  fake
}
`

export const UserPreviousValuesNoNestingFragment = `fragment UserPreviousValuesNoNesting on UserPreviousValues {
  id
  createdAt
  updatedAt
  username
  email
  phone
  showEmail
  showPhone
  password
  fullname
  image
  address
  sudo
  active
  activated
  deleted
}
`

export const EthTransactionNoNestingFragment = `fragment EthTransactionNoNesting on EthTransaction {
  id
  createdAt
  updatedAt
  address
  type
}
`

export const UserGroupSubscriptionPayloadNoNestingFragment = `fragment UserGroupSubscriptionPayloadNoNesting on UserGroupSubscriptionPayload {
  mutation
  updatedFields
}
`

export const AggregateLogNoNestingFragment = `fragment AggregateLogNoNesting on AggregateLog {
  count
}
`

export const UserGroupPreviousValuesNoNestingFragment = `fragment UserGroupPreviousValuesNoNesting on UserGroupPreviousValues {
  id
  name
}
`

export const LogedInSubscriptionPayloadNoNestingFragment = `fragment LogedInSubscriptionPayloadNoNesting on LogedInSubscriptionPayload {
  mutation
  updatedFields
}
`

export const LogedInEdgeNoNestingFragment = `fragment LogedInEdgeNoNesting on LogedInEdge {
  cursor
}
`

export const LogedInPreviousValuesNoNestingFragment = `fragment LogedInPreviousValuesNoNesting on LogedInPreviousValues {
  id
  createdAt
  fake
}
`

export const AggregateEthAccountNoNestingFragment = `fragment AggregateEthAccountNoNesting on AggregateEthAccount {
  count
}
`

export const EthAccountSubscriptionPayloadNoNestingFragment = `fragment EthAccountSubscriptionPayloadNoNesting on EthAccountSubscriptionPayload {
  mutation
  updatedFields
}
`

export const EthAccountPreviousValuesNoNestingFragment = `fragment EthAccountPreviousValuesNoNesting on EthAccountPreviousValues {
  id
  address
}
`

export const EthDeployedContractNoNestingFragment = `fragment EthDeployedContractNoNesting on EthDeployedContract {
  id
  createdAt
  updatedAt
  name
  description
  source
  bytecode
  abi
  txHash
  address
}
`

export const EthContractSubscriptionPayloadNoNestingFragment = `fragment EthContractSubscriptionPayloadNoNesting on EthContractSubscriptionPayload {
  mutation
  updatedFields
}
`

export const UserEdgeNoNestingFragment = `fragment UserEdgeNoNesting on UserEdge {
  cursor
}
`

export const EthTransactionSubscriptionPayloadNoNestingFragment = `fragment EthTransactionSubscriptionPayloadNoNesting on EthTransactionSubscriptionPayload {
  mutation
  updatedFields
}
`

export const EthDeployedContractPreviousValuesNoNestingFragment = `fragment EthDeployedContractPreviousValuesNoNesting on EthDeployedContractPreviousValues {
  id
  createdAt
  updatedAt
  name
  description
  source
  bytecode
  abi
  txHash
  address
}
`

export const EthDeployedContractSubscriptionPayloadNoNestingFragment = `fragment EthDeployedContractSubscriptionPayloadNoNesting on EthDeployedContractSubscriptionPayload {
  mutation
  updatedFields
}
`

export const EthContractPreviousValuesNoNestingFragment = `fragment EthContractPreviousValuesNoNesting on EthContractPreviousValues {
  id
  createdAt
  updatedAt
  name
  description
  source
}
`

export const EthContractEdgeNoNestingFragment = `fragment EthContractEdgeNoNesting on EthContractEdge {
  cursor
}
`

export const AggregateUserGroupNoNestingFragment = `fragment AggregateUserGroupNoNesting on AggregateUserGroup {
  count
}
`

export const PageInfoNoNestingFragment = `fragment PageInfoNoNesting on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
`

export const UserNoNestingFragment = `fragment UserNoNesting on User {
  id
  createdAt
  updatedAt
  username
  email
  phone
  showEmail
  showPhone
  password
  fullname
  image
  address
  sudo
  active
  activated
  deleted
  hasEmail
  hasPhone
}
`


export const AggregateEthDeployedContractDeepNestingFragment = `fragment AggregateEthDeployedContractDeepNesting on AggregateEthDeployedContract {
  count
}
`

export const EthTransactionPreviousValuesDeepNestingFragment = `fragment EthTransactionPreviousValuesDeepNesting on EthTransactionPreviousValues {
  id
  createdAt
  updatedAt
  address
  type
}
`

export const EthTransactionConnectionDeepNestingFragment = `fragment EthTransactionConnectionDeepNesting on EthTransactionConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...EthTransactionEdgeDeepNesting
  }
  aggregate {
    ...AggregateEthTransactionDeepNesting
  }
}
`

export const LogDeepNestingFragment = `fragment LogDeepNesting on Log {
  id
  level
  objectType
  message
  stack
}
`

export const EthTransactionEdgeDeepNestingFragment = `fragment EthTransactionEdgeDeepNesting on EthTransactionEdge {
  node {
    ...EthTransactionDeepNesting
  }
  cursor
}
`

export const UserGroupDeepNestingFragment = `fragment UserGroupDeepNesting on UserGroup {
  id
  name
  Users {
    ...UserDeepNesting
  }
}
`

export const AggregateEthTransactionDeepNestingFragment = `fragment AggregateEthTransactionDeepNesting on AggregateEthTransaction {
  count
}
`

export const EthContractDeepNestingFragment = `fragment EthContractDeepNesting on EthContract {
  id
  createdAt
  updatedAt
  name
  description
  source
  CreatedBy {
    ...UserDeepNesting
  }
  Deployed {
    ...EthDeployedContractDeepNesting
  }
}
`

export const ethNetDeepNestingFragment = `fragment ethNetDeepNesting on ethNet {
  id
  isListening
  peerCount
}
`

export const EthAccountDeepNestingFragment = `fragment EthAccountDeepNesting on EthAccount {
  id
  address
  CreatedBy {
    ...UserDeepNesting
  }
  balance
}
`

export const EthPersonalAccountDeepNestingFragment = `fragment EthPersonalAccountDeepNesting on EthPersonalAccount {
  address
  balance
}
`

export const LogConnectionDeepNestingFragment = `fragment LogConnectionDeepNesting on LogConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...LogEdgeDeepNesting
  }
  aggregate {
    ...AggregateLogDeepNesting
  }
}
`

export const ethSyncStateDeepNestingFragment = `fragment ethSyncStateDeepNesting on ethSyncState {
  startingBlock
  currentBlock
  highestBlock
  knownStates
  pulledStates
}
`

export const LogEdgeDeepNestingFragment = `fragment LogEdgeDeepNesting on LogEdge {
  node {
    ...LogDeepNesting
  }
  cursor
}
`

export const BatchPayloadDeepNestingFragment = `fragment BatchPayloadDeepNesting on BatchPayload {
  count
}
`

export const UserConnectionDeepNestingFragment = `fragment UserConnectionDeepNesting on UserConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...UserEdgeDeepNesting
  }
  aggregate {
    ...AggregateUserDeepNesting
  }
}
`

export const AuthPayloadDeepNestingFragment = `fragment AuthPayloadDeepNesting on AuthPayload {
  success
  message
  token
  data {
    ...UserDeepNesting
  }
}
`

export const AggregateUserDeepNestingFragment = `fragment AggregateUserDeepNesting on AggregateUser {
  count
}
`

export const ErrorDeepNestingFragment = `fragment ErrorDeepNesting on Error {
  key
  message
}
`

export const UserGroupEdgeDeepNestingFragment = `fragment UserGroupEdgeDeepNesting on UserGroupEdge {
  node {
    ...UserGroupDeepNesting
  }
  cursor
}
`

export const UserResponseDeepNestingFragment = `fragment UserResponseDeepNesting on UserResponse {
  success
  message
  data {
    ...UserDeepNesting
  }
}
`

export const LogedInConnectionDeepNestingFragment = `fragment LogedInConnectionDeepNesting on LogedInConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...LogedInEdgeDeepNesting
  }
  aggregate {
    ...AggregateLogedInDeepNesting
  }
}
`

export const EthContractResponseDeepNestingFragment = `fragment EthContractResponseDeepNesting on EthContractResponse {
  success
  message
  data {
    ...EthContractDeepNesting
  }
}
`

export const AggregateLogedInDeepNestingFragment = `fragment AggregateLogedInDeepNesting on AggregateLogedIn {
  count
}
`

export const EthPersonalAccountResponseDeepNestingFragment = `fragment EthPersonalAccountResponseDeepNesting on EthPersonalAccountResponse {
  success
  message
  data {
    ...EthPersonalAccountDeepNesting
  }
}
`

export const EthAccountEdgeDeepNestingFragment = `fragment EthAccountEdgeDeepNesting on EthAccountEdge {
  node {
    ...EthAccountDeepNesting
  }
  cursor
}
`

export const EthTransactionResponseDeepNestingFragment = `fragment EthTransactionResponseDeepNesting on EthTransactionResponse {
  success
  message
  data {
    ...EthTransactionDeepNesting
  }
}
`

export const EthContractConnectionDeepNestingFragment = `fragment EthContractConnectionDeepNesting on EthContractConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...EthContractEdgeDeepNesting
  }
  aggregate {
    ...AggregateEthContractDeepNesting
  }
}
`

export const LogSubscriptionPayloadDeepNestingFragment = `fragment LogSubscriptionPayloadDeepNesting on LogSubscriptionPayload {
  mutation
  node {
    ...LogDeepNesting
  }
  updatedFields
  previousValues {
    ...LogPreviousValuesDeepNesting
  }
}
`

export const AggregateEthContractDeepNestingFragment = `fragment AggregateEthContractDeepNesting on AggregateEthContract {
  count
}
`

export const LogPreviousValuesDeepNestingFragment = `fragment LogPreviousValuesDeepNesting on LogPreviousValues {
  id
  level
  objectType
  message
  stack
}
`

export const EthDeployedContractEdgeDeepNestingFragment = `fragment EthDeployedContractEdgeDeepNesting on EthDeployedContractEdge {
  node {
    ...EthDeployedContractDeepNesting
  }
  cursor
}
`

export const UserSubscriptionPayloadDeepNestingFragment = `fragment UserSubscriptionPayloadDeepNesting on UserSubscriptionPayload {
  mutation
  node {
    ...UserDeepNesting
  }
  updatedFields
  previousValues {
    ...UserPreviousValuesDeepNesting
  }
}
`

export const LogedInDeepNestingFragment = `fragment LogedInDeepNesting on LogedIn {
  id
  createdAt
  fake
  User {
    ...UserDeepNesting
  }
}
`

export const UserPreviousValuesDeepNestingFragment = `fragment UserPreviousValuesDeepNesting on UserPreviousValues {
  id
  createdAt
  updatedAt
  username
  email
  phone
  showEmail
  showPhone
  password
  fullname
  image
  address
  sudo
  active
  activated
  deleted
}
`

export const EthTransactionDeepNestingFragment = `fragment EthTransactionDeepNesting on EthTransaction {
  id
  createdAt
  updatedAt
  address
  type
  CreatedBy {
    ...UserDeepNesting
  }
}
`

export const UserGroupSubscriptionPayloadDeepNestingFragment = `fragment UserGroupSubscriptionPayloadDeepNesting on UserGroupSubscriptionPayload {
  mutation
  node {
    ...UserGroupDeepNesting
  }
  updatedFields
  previousValues {
    ...UserGroupPreviousValuesDeepNesting
  }
}
`

export const AggregateLogDeepNestingFragment = `fragment AggregateLogDeepNesting on AggregateLog {
  count
}
`

export const UserGroupPreviousValuesDeepNestingFragment = `fragment UserGroupPreviousValuesDeepNesting on UserGroupPreviousValues {
  id
  name
}
`

export const UserGroupConnectionDeepNestingFragment = `fragment UserGroupConnectionDeepNesting on UserGroupConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...UserGroupEdgeDeepNesting
  }
  aggregate {
    ...AggregateUserGroupDeepNesting
  }
}
`

export const LogedInSubscriptionPayloadDeepNestingFragment = `fragment LogedInSubscriptionPayloadDeepNesting on LogedInSubscriptionPayload {
  mutation
  node {
    ...LogedInDeepNesting
  }
  updatedFields
  previousValues {
    ...LogedInPreviousValuesDeepNesting
  }
}
`

export const LogedInEdgeDeepNestingFragment = `fragment LogedInEdgeDeepNesting on LogedInEdge {
  node {
    ...LogedInDeepNesting
  }
  cursor
}
`

export const LogedInPreviousValuesDeepNestingFragment = `fragment LogedInPreviousValuesDeepNesting on LogedInPreviousValues {
  id
  createdAt
  fake
}
`

export const AggregateEthAccountDeepNestingFragment = `fragment AggregateEthAccountDeepNesting on AggregateEthAccount {
  count
}
`

export const EthAccountSubscriptionPayloadDeepNestingFragment = `fragment EthAccountSubscriptionPayloadDeepNesting on EthAccountSubscriptionPayload {
  mutation
  node {
    ...EthAccountDeepNesting
  }
  updatedFields
  previousValues {
    ...EthAccountPreviousValuesDeepNesting
  }
}
`

export const EthDeployedContractConnectionDeepNestingFragment = `fragment EthDeployedContractConnectionDeepNesting on EthDeployedContractConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...EthDeployedContractEdgeDeepNesting
  }
  aggregate {
    ...AggregateEthDeployedContractDeepNesting
  }
}
`

export const EthAccountPreviousValuesDeepNestingFragment = `fragment EthAccountPreviousValuesDeepNesting on EthAccountPreviousValues {
  id
  address
}
`

export const EthDeployedContractDeepNestingFragment = `fragment EthDeployedContractDeepNesting on EthDeployedContract {
  id
  createdAt
  updatedAt
  name
  description
  source
  bytecode
  abi
  txHash
  address
  CreatedBy {
    ...UserDeepNesting
  }
  Contract {
    ...EthContractDeepNesting
  }
}
`

export const EthContractSubscriptionPayloadDeepNestingFragment = `fragment EthContractSubscriptionPayloadDeepNesting on EthContractSubscriptionPayload {
  mutation
  node {
    ...EthContractDeepNesting
  }
  updatedFields
  previousValues {
    ...EthContractPreviousValuesDeepNesting
  }
}
`

export const UserEdgeDeepNestingFragment = `fragment UserEdgeDeepNesting on UserEdge {
  node {
    ...UserDeepNesting
  }
  cursor
}
`

export const EthAccountConnectionDeepNestingFragment = `fragment EthAccountConnectionDeepNesting on EthAccountConnection {
  pageInfo {
    ...PageInfoDeepNesting
  }
  edges {
    ...EthAccountEdgeDeepNesting
  }
  aggregate {
    ...AggregateEthAccountDeepNesting
  }
}
`

export const EthTransactionSubscriptionPayloadDeepNestingFragment = `fragment EthTransactionSubscriptionPayloadDeepNesting on EthTransactionSubscriptionPayload {
  mutation
  node {
    ...EthTransactionDeepNesting
  }
  updatedFields
  previousValues {
    ...EthTransactionPreviousValuesDeepNesting
  }
}
`

export const EthDeployedContractPreviousValuesDeepNestingFragment = `fragment EthDeployedContractPreviousValuesDeepNesting on EthDeployedContractPreviousValues {
  id
  createdAt
  updatedAt
  name
  description
  source
  bytecode
  abi
  txHash
  address
}
`

export const EthDeployedContractSubscriptionPayloadDeepNestingFragment = `fragment EthDeployedContractSubscriptionPayloadDeepNesting on EthDeployedContractSubscriptionPayload {
  mutation
  node {
    ...EthDeployedContractDeepNesting
  }
  updatedFields
  previousValues {
    ...EthDeployedContractPreviousValuesDeepNesting
  }
}
`

export const EthContractPreviousValuesDeepNestingFragment = `fragment EthContractPreviousValuesDeepNesting on EthContractPreviousValues {
  id
  createdAt
  updatedAt
  name
  description
  source
}
`

export const EthContractEdgeDeepNestingFragment = `fragment EthContractEdgeDeepNesting on EthContractEdge {
  node {
    ...EthContractDeepNesting
  }
  cursor
}
`

export const AggregateUserGroupDeepNestingFragment = `fragment AggregateUserGroupDeepNesting on AggregateUserGroup {
  count
}
`

export const PageInfoDeepNestingFragment = `fragment PageInfoDeepNesting on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
`

export const UserDeepNestingFragment = `fragment UserDeepNesting on User {
  id
  createdAt
  updatedAt
  username
  email
  phone
  showEmail
  showPhone
  password
  fullname
  image
  address
  sudo
  active
  activated
  deleted
  Groups {
    ...UserGroupDeepNesting
  }
  CreatedUsers {
    ...UserDeepNesting
  }
  CreatedBy {
    ...UserDeepNesting
  }
  LogedIns {
    ...LogedInDeepNesting
  }
  EthContractsCreated {
    ...EthContractDeepNesting
  }
  EthContractsDeployed {
    ...EthDeployedContractDeepNesting
  }
  EthAccounts {
    ...EthAccountDeepNesting
  }
  EthTransactions {
    ...EthTransactionDeepNesting
  }
  hasEmail
  hasPhone
}
`

