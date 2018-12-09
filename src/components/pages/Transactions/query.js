
import {
  EthTransactionNoNestingFragment,
  UserNoNestingFragment,
  EthAccountNoNestingFragment,
} from "../../../schema/generated/api.fragments";


export const ethTransactionFragment = `
  fragment ethTransaction on EthTransaction {
    ...EthTransactionNoNesting
    Sender{
      ...EthAccountNoNesting
      CreatedBy {
        ...UserNoNesting
      }
    }
    Receiver{
      ...EthAccountNoNesting
      CreatedBy {
        ...UserNoNesting
      }
    }
  }
  
  ${EthTransactionNoNestingFragment}
  ${UserNoNestingFragment}
  ${EthAccountNoNestingFragment}
`;


export const ethTransactionsConnection = `
  query ethTransactionsConnection(
    $where: EthTransactionWhereInput
    $first: Int
    $skip: Int
    $orderBy: EthTransactionOrderByInput
  ){
    objectsConnection: ethTransactionsConnection(
      first: $first
      skip: $skip
      where:$where
      orderBy: $orderBy
    ){
      aggregate{
        count
      }
      edges{
        node{
          ...ethTransaction
        }
      }
    }
  }

  ${ethTransactionFragment}
`;


export const createEthTransactionProcessor = `
  mutation createEthTransactionProcessor (
    $data: EthTransactionCreateInput!
  ){
    response: createEthTransactionProcessor (
      data: $data
    ){
      success
      message
      errors{
        key
        message
      }
      data{
        ...ethTransaction
      }
    }
  }

  ${ethTransactionFragment}
`;


export const updateEthTransactionProcessor = `
  mutation updateEthTransactionProcessor (
    $where: EthTransactionWhereUniqueInput!
    $data: EthTransactionUpdateInput!
  ){
    response: updateEthTransactionProcessor (
      data: $data
      where: $where
    ){
      success
      message
      errors{
        key
        message
      }
      data{
        ...ethTransaction
      }
    }
  }

  ${ethTransactionFragment}
`;


export const ethTransaction = `
  query ethTransaction (
    $where: EthTransactionWhereUniqueInput!
  ){
    object: ethTransaction(
      where:$where
    ){
      ...ethTransaction
    }
  }

  ${ethTransactionFragment}

`;

export const deployEthTransactionProcessor = `
  mutation deployEthTransactionProcessor (
    $where: EthTransactionWhereUniqueInput!
    $data: EthTransactionDeployInput!
  ){
    response: deployEthTransactionProcessor (
      data: $data
      where: $where
    ){
      success
      message
      errors{
        key
        message
      }
      data{
        ...ethTransaction
      }
    }
  }

  ${ethTransactionFragment}
`;
