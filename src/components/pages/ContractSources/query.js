
import {
  EthContractSourceNoNestingFragment,
  EthAccountNoNestingFragment,
  UserNoNestingFragment,
} from "../../../schema/generated/api.fragments";


export const ethContractSourceFragment = `
  fragment ethContractSource on EthContractSource {
    ...EthContractSourceNoNesting
    CreatedBy {
      ...UserNoNesting
    }
    Accounts{
      id
      createdAt
      updatedAt
      address
      address
      CreatedBy {
        ...UserNoNesting
      }
    }
  }
  
  ${EthContractSourceNoNestingFragment}
  ${UserNoNestingFragment}
`;


export const ethContractSourcesConnection = `
  query ethContractSourcesConnection(
    $where: EthContractSourceWhereInput
    $first: Int
    $skip: Int
    $orderBy: EthContractSourceOrderByInput
  ){
    objectsConnection: ethContractSourcesConnection(
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
          ...ethContractSource
        }
      }
    }
  }

  ${ethContractSourceFragment}
`;


export const createEthContractSourceProcessor = `
  mutation createEthContractSourceProcessor (
    $data: EthContractSourceCreateInput!
  ){
    response: createEthContractSourceProcessor (
      data: $data
    ){
      success
      message
      errors{
        key
        message
      }
      data{
        ...ethContractSource
      }
    }
  }

  ${ethContractSourceFragment}
`;


export const updateEthContractSourceProcessor = `
  mutation updateEthContractSourceProcessor (
    $where: EthContractSourceWhereUniqueInput!
    $data: EthContractSourceUpdateInput!
  ){
    response: updateEthContractSourceProcessor (
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
        ...ethContractSource
      }
    }
  }

  ${ethContractSourceFragment}
`;


export const ethContractSource = `
  query ethContractSource (
    $where: EthContractSourceWhereUniqueInput!
  ){
    object: ethContractSource(
      where:$where
    ){
      ...ethContractSource
    }
  }

  ${ethContractSourceFragment}

`;

export const deployEthContractSourceProcessor = `
  mutation deployEthContractSourceProcessor (
    $where: EthContractSourceWhereUniqueInput!
    $data: EthContractSourceDeployInput!
  ){
    response: deployEthContractSourceProcessor (
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
        ...ethContractSource
      }
    }
  }

  ${ethContractSourceFragment}
`;
