import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  ethContractSource,
  updateEthContractSourceProcessor,
  deployEthContractSourceProcessor,
} from "../query";

import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Page from "../../layout";

import View from "../View/ContractSource";

export const connectors = [
  {
    code: ethContractSource,
  },
  {
    code: updateEthContractSourceProcessor,
    // name: "updateEthContractSourceProcessor",
  },
]

export const createConnector = function (connectors) {

  return compose.apply(this, connectors.map(n => {
    const {
      code,
      ...other
    } = n;

    return graphql(gql(code), {
      ...other,
    });
  }));

  // const code = ethContractSourcesConnection;

  // return compose(
  //   [graphql(gql(code))],
  // );
}


class ContractSourcePage extends Page {


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
          contractSourceId,
        },
      },
      ...other
    } = this.props;

    // return null;

    return super.render(<Connector
      where={{
        id: contractSourceId,
      }}
      onSave={this.onSave ? result => this.onSave(result) : undefined}
      {...other}
    />);
  }
}


export default ContractSourcePage;