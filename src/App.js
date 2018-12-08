import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles/less/styles.css";

import ContractsPage from "./components/pages/Contracts";
import ContractPage from "./components/pages/Contracts/Contract";
import ContractCreatePage from "./components/pages/Contracts/Contract/Create";

import DeployedContractPage from "./components/pages/DeployedContracts/Contract";

import TransactionsPage from "./components/pages/Transactions";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Typography } from 'material-ui';


export {
  ContractsPage,
  ContractPage,
  ContractCreatePage,

  DeployedContractPage,

  TransactionsPage,
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