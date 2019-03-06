import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Page from "../layout";

import View from "./View";


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

  // const code = ethTransactionsConnection;

  // return compose(
  //   [graphql(gql(code))],
  // );
}


class TransactionsPage extends Page {


  static defaultProps = {
    ...Page.defaultProps,
    View,
  }



  componentWillMount() {

    const {
      query: {
        ethTransactionsConnection,
        updateEthTransactionProcessor,
      },
    } = this.context;

    const connectors = [
      {
        code: ethTransactionsConnection,
      },
      {
        code: updateEthTransactionProcessor,
        name: "updateEthTransactionProcessor",
      },
    ]

    const {
      View,
    } = this.props;

    Object.assign(this.state, {
      Connector: createConnector(connectors, this.context)(View),
    });

    super.componentWillMount && super.componentWillMount();

  }


  render() {

    const {
      Connector,
    } = this.state;

    const {
      ...other
    } = this.props;

    return super.render(<Connector
      {...this.getPaginationData()}
      {...other}
    />);
  }
}


export default TransactionsPage;