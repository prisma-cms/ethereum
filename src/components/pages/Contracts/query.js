
import {
  EthContractNoNestingFragment,
  EthDeployedContractNoNestingFragment,
  UserNoNestingFragment,
} from "../../../schema/generated/api.fragments";


export const ethContractFragment = `
  fragment ethContract on EthContract {
    ...EthContractNoNesting
    CreatedBy {
      ...UserNoNesting
    }
    Deployed{
      id
      createdAt
      updatedAt
      txHash
      address
      CreatedBy {
        ...UserNoNesting
      }
    }
  }
  
  ${EthContractNoNestingFragment}
  ${UserNoNestingFragment}
`;


export const ethContractsConnection = `
  query ethContractsConnection(
    $where: EthContractWhereInput
    $first: Int
    $skip: Int
    $orderBy: EthContractOrderByInput
  ){
    objectsConnection: ethContractsConnection(
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
          ...ethContract
        }
      }
    }
  }

  ${ethContractFragment}
`;


export const createEthContractProcessor = `
  mutation createEthContractProcessor (
    $data: EthContractCreateInput!
  ){
    response: createEthContractProcessor (
      data: $data
    ){
      success
      message
      errors{
        key
        message
      }
      data{
        ...ethContract
      }
    }
  }

  ${ethContractFragment}
`;


export const updateEthContractProcessor = `
  mutation updateEthContractProcessor (
    $where: EthContractWhereUniqueInput!
    $data: EthContractUpdateInput!
  ){
    response: updateEthContractProcessor (
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
        ...ethContract
      }
    }
  }

  ${ethContractFragment}
`;


export const ethContract = `
  query ethContract (
    $where: EthContractWhereUniqueInput!
  ){
    object: ethContract(
      where:$where
    ){
      ...ethContract
    }
  }

  ${ethContractFragment}

`;

export const deployEthContractProcessor = `
  mutation deployEthContractProcessor (
    $where: EthContractWhereUniqueInput!
    $data: EthContractDeployInput!
  ){
    response: deployEthContractProcessor (
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
        ...ethContract
      }
    }
  }

  ${ethContractFragment}
`;
