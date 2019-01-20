
import React, {
  Component,
} from 'react';

import Context from '@prisma-cms/context';

import * as UI from "../ui";

class ContextProvider extends Component {

  static contextType = Context;


  // componentWillMount() {

  //   const {
  //     query,
  //     ...other
  //   } = this.context;

  //   this.newContext = {
  //     query: {
  //       ...query,
  //       ...this.prepareQuery(),
  //     },
  //     ...other
  //   }

  // }


  render() {

    const {
      children,
    } = this.props;

    let {
      query,
    } = this.context;

    Object.assign(this.context, {
      query: {
        ...query,
        ...this.prepareQuery(),
      },
      ...UI,
    });

    return <Context.Provider
      value={this.context}
    >
      {children || null}
    </Context.Provider>;

  }

  prepareQuery() {

    return {
      ...this.prepareEthAccountQuery(),
      ...this.prepareEthTransactionQuery(),
    }
  }


  prepareEthAccountQuery() {
    const {
      queryFragments,
    } = this.context;


    const {
      EthAccountNoNestingFragment,
      BatchPayloadNoNestingFragment,
    } = queryFragments;


    const ethAccountFragment = `
      fragment ethAccount on EthAccount {
        ...EthAccountNoNesting
      }

      ${EthAccountNoNestingFragment}
    `;


    const ethAccountsConnection = `
      query ethAccountsConnection (
        $where: EthAccountWhereInput
        $orderBy: EthAccountOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objectsConnection: ethAccountsConnection (
          where: $where
          orderBy: $orderBy
          skip: $skip
          after: $after
          before: $before
          first: $first
          last: $last
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


    const ethAccounts = `
      query ethAccounts (
        $where: EthAccountWhereInput
        $orderBy: EthAccountOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objects: ethAccounts (
          where: $where
          orderBy: $orderBy
          skip: $skip
          after: $after
          before: $before
          first: $first
          last: $last
        ){
          ...ethAccount
        }
      }

      ${ethAccountFragment}
    `;


    const ethAccount = `
      query ethAccount (
        $where: EthAccountWhereUniqueInput!
      ){
        object: ethAccount(
          where: $where
        ){
          ...ethAccount
        }
      }

      ${ethAccountFragment}
    `;


    const createEthAccountProcessor = `
      mutation createEthAccountProcessor(
        $data: EthAccountCreateInput!
      ) {
        response: createEthAccountProcessor(
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


    const updateEthAccountProcessor = `
      mutation updateEthAccountProcessor(
        $data: EthAccountUpdateInput!
        $where: EthAccountWhereUniqueInput
      ) {
        response: updateEthAccountProcessor(
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


    const deleteEthAccount = `
      mutation deleteEthAccount (
        $where: EthAccountWhereUniqueInput!
      ){
        deleteEthAccount(
          where: $where
        ){
          ...EthAccountNoNesting
        }
      }
      ${EthAccountNoNestingFragment}
    `;


    const deleteManyEthAccounts = `
      mutation deleteManyEthAccounts (
        $where: EthAccountWhereInput
      ){
        deleteManyEthAccounts(
          where: $where
        ){
          ...BatchPayloadNoNesting
        }
      }
      ${BatchPayloadNoNestingFragment}
    `;


    return {
      ethAccountsConnection,
      ethAccounts,
      ethAccount,
      createEthAccountProcessor,
      updateEthAccountProcessor,
      deleteEthAccount,
      deleteManyEthAccounts,
    }
  }


  prepareEthTransactionQuery() {
    const {
      queryFragments,
    } = this.context;


    const {
      EthTransactionNoNestingFragment,
      UserNoNestingFragment,
      EthAccountNoNestingFragment,
      BatchPayloadNoNestingFragment,
    } = queryFragments;


    const ethTransactionFragment = `
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


    const ethTransactionsConnection = `
      query ethTransactionsConnection (
        $where: EthTransactionWhereInput
        $orderBy: EthTransactionOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objectsConnection: ethTransactionsConnection (
          where: $where
          orderBy: $orderBy
          skip: $skip
          after: $after
          before: $before
          first: $first
          last: $last
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


    const ethTransactions = `
      query ethTransactions (
        $where: EthTransactionWhereInput
        $orderBy: EthTransactionOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objects: ethTransactions (
          where: $where
          orderBy: $orderBy
          skip: $skip
          after: $after
          before: $before
          first: $first
          last: $last
        ){
          ...ethTransaction
        }
      }

      ${ethTransactionFragment}
    `;


    const ethTransaction = `
      query ethTransaction (
        $where: EthTransactionWhereUniqueInput!
      ){
        object: ethTransaction(
          where: $where
        ){
          ...ethTransaction
        }
      }

      ${ethTransactionFragment}
    `;


    const createEthTransactionProcessor = `
      mutation createEthTransactionProcessor(
        $data: EthTransactionCreateInput!
      ) {
        response: createEthTransactionProcessor(
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


    const updateEthTransactionProcessor = `
      mutation updateEthTransactionProcessor(
        $data: EthTransactionUpdateInput!
        $where: EthTransactionWhereUniqueInput
      ) {
        response: updateEthTransactionProcessor(
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


    const deleteEthTransaction = `
      mutation deleteEthTransaction (
        $where: EthTransactionWhereUniqueInput!
      ){
        deleteEthTransaction(
          where: $where
        ){
          ...EthTransactionNoNesting
        }
      }
      ${EthTransactionNoNestingFragment}
    `;


    const deleteManyEthTransactions = `
      mutation deleteManyEthTransactions (
        $where: EthTransactionWhereInput
      ){
        deleteManyEthTransactions(
          where: $where
        ){
          ...BatchPayloadNoNesting
        }
      }
      ${BatchPayloadNoNestingFragment}
    `;



    const deployEthTransactionProcessor = `
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


    return {
      ethTransactionsConnection,
      ethTransactions,
      ethTransaction,
      createEthTransactionProcessor,
      updateEthTransactionProcessor,
      deleteEthTransaction,
      deleteManyEthTransactions,
      deployEthTransactionProcessor,
    }
  }

}

export default ContextProvider;