import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Page from "../../layout";

import View from "../View/Transaction";


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
}


class TransactionPage extends Page {


  static defaultProps = {
    ...Page.defaultProps,
    View,
  }



  componentWillMount() {

    const {
      query: {
        ethTransaction,
      },
    } = this.context;


    const connectors = [
      {
        code: ethTransaction,
      },
    ]


    const {
      View,
    } = this.props;

    Object.assign(this.state, {
      Connector: createConnector(connectors)(View),
    });

    super.componentWillMount && super.componentWillMount();

  }


  render() {

    const {
      Connector,
    } = this.state;

    const {
      match: {
        params: {
          transactionId,
        },
      },
      ...other
    } = this.props;

    // return null;

    return super.render(<Connector
      where={{
        id: transactionId,
      }}
      onSave={this.onSave ? result => this.onSave(result) : undefined}
      {...other}
    />);
  }
}


export default TransactionPage;