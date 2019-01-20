import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles/less/styles.css";

import ContractSourcesPage from "./components/pages/ContractSources";
import ContractSourcePage from "./components/pages/ContractSources/ContractSource";
import ContractSourceCreatePage from "./components/pages/ContractSources/ContractSource/Create";

import AccountsPage from "./components/pages/Accounts";
import AccountPage from "./components/pages/Accounts/Account";

import TransactionsPage from "./components/pages/Transactions";
import TransactionPage from "./components/pages/Transactions/Transaction";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Typography } from 'material-ui';


export {
  ContractSourcesPage,
  ContractSourcePage,
  ContractSourceCreatePage,

  AccountsPage,
  AccountPage,

  TransactionsPage,
  TransactionPage,
}


const query = gql`
  query ethereumNet{
    ethNet{
      id
      isListening
      peerCount
    }
  }
`;

class App extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {

    const {
      data: {
        loading,
        ethNet,
      },
    } = this.props;


    if (!ethNet) {

      if (loading) {
        return null;
      }

      else {
        return <Typography
          color="error"
        >
          Can not get ethereum net info
        </Typography>
      }
    }

    const {
      id,
      isListening,
      peerCount,
    } = ethNet;

    return (
      <div>

        <Typography
        >
          Net ID: {id}
        </Typography>

        <Typography
        >
          isListening: {(isListening ? true : false).toString()}
        </Typography>

        <Typography
        >
          peerCount: {peerCount}
        </Typography>

      </div>
    );
  }
}

export default graphql(query)(App);