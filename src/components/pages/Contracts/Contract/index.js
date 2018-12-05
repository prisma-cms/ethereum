import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  ethContract,
  updateEthContractProcessor,
} from "../query";

import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Page from "../../layout";

import View from "../View/Contract";

export const connectors = [
  {
    code: ethContract,
  },
  {
    code: updateEthContractProcessor,
    // name: "updateEthContractProcessor",
  },
]

export const createConnector = function (connectors) {

  return compose(connectors.map(n => {
    const {
      code,
      ...other
    } = n;

    return graphql(gql(code), {
      ...other,
    });
  }));

  // const code = ethContractsConnection;

  // return compose(
  //   [graphql(gql(code))],
  // );
}


class ContractPage extends Page {


  static defaultProps = {
    ...Page.defaultProps,
    connectors,
    View,
  }


  state = {}

  constructor(props) {

    super(props);

    const {
      connectors,
      View,
    } = props;

    Object.assign(this.state, {
      Connector: createConnector(connectors)(View),
    });

  }


  render() {

    const {
      Connector,
    } = this.state;

    const {
      match: {
        params: {
          contractId,
        },
      },
      ...other
    } = this.props;

    // return null;

    return super.render(<Connector
      where={{
        id: contractId,
      }}
      onSave={this.onSave ? result => this.onSave(result) : undefined}
      {...other}
    />);
  }
}


export default ContractPage;