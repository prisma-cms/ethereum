
import {
  EthAccountNoNestingFragment,
  // EthAccountNoNestingFragment,
  UserNoNestingFragment,
} from "../../../schema/generated/api.fragments";


export const ethAccountFragment = `
  fragment ethAccount on EthAccount {
    ...EthAccountNoNesting
    CreatedBy {
      ...UserNoNesting
    }
  }
  
  ${EthAccountNoNestingFragment}
  ${UserNoNestingFragment}
`;


export const ethAccountsConnection = `
  query ethAccountsConnection(
    $where: EthAccountWhereInput
    $first: Int
    $skip: Int
    $orderBy: EthAccountOrderByInput
  ){
    objectsConnection: ethAccountsConnection(
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
          ...ethAccount
        }
      }
    }
  }

  ${ethAccountFragment}
`;


export const createEthAccountProcessor = `
  mutation createEthAccountProcessor (
    $data: EthAccountCreateInput!
  ){
    response: createEthAccountProcessor (
      data: $data
    ){
      success
      message
      errors{
        key
        message
      }
      data{
        ...ethAccount
      }
    }
  }

  ${ethAccountFragment}
`;


export const updateEthAccountProcessor = `
  mutation updateEthAccountProcessor (
    $where: EthAccountWhereUniqueInput!
    $data: EthAccountUpdateInput!
  ){
    response: updateEthAccountProcessor (
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
        ...ethAccount
      }
    }
  }

  ${ethAccountFragment}
`;


export const ethAccount = `
  query ethAccount (
    $where: EthAccountWhereUniqueInput!
  ){
    object: ethAccount(
      where:$where
    ){
      ...ethAccount
    }
  }

  ${ethAccountFragment}

`;
