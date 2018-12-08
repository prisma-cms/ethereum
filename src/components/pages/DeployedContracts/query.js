
import {
  EthDeployedContractNoNestingFragment,
  // EthDeployedContractNoNestingFragment,
  UserNoNestingFragment,
} from "../../../schema/generated/api.fragments";


export const ethDeployedContractFragment = `
  fragment ethDeployedContract on EthDeployedContract {
    ...EthDeployedContractNoNesting
    CreatedBy {
      ...UserNoNesting
    }
  }
  
  ${EthDeployedContractNoNestingFragment}
  ${UserNoNestingFragment}
`;


export const ethDeployedContractsConnection = `
  query ethDeployedContractsConnection(
    $where: EthDeployedContractWhereInput
    $first: Int
    $skip: Int
    $orderBy: EthDeployedContractOrderByInput
  ){
    objectsConnection: ethDeployedContractsConnection(
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
          ...ethDeployedContract
        }
      }
    }
  }

  ${ethDeployedContractFragment}
`;


export const createEthDeployedContractProcessor = `
  mutation createEthDeployedContractProcessor (
    $data: EthDeployedContractCreateInput!
  ){
    response: createEthDeployedContractProcessor (
      data: $data
    ){
      success
      message
      errors{
        key
        message
      }
      data{
        ...ethDeployedContract
      }
    }
  }

  ${ethDeployedContractFragment}
`;


export const updateEthDeployedContractProcessor = `
  mutation updateEthDeployedContractProcessor (
    $where: EthDeployedContractWhereUniqueInput!
    $data: EthDeployedContractUpdateInput!
  ){
    response: updateEthDeployedContractProcessor (
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
        ...ethDeployedContract
      }
    }
  }

  ${ethDeployedContractFragment}
`;


export const ethDeployedContract = `
  query ethDeployedContract (
    $where: EthDeployedContractWhereUniqueInput!
  ){
    object: ethDeployedContract(
      where:$where
    ){
      ...ethDeployedContract
    }
  }

  ${ethDeployedContractFragment}

`;
