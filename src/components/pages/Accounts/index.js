import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  ethAccountsConnection,
  updateEthAccountProcessor,
} from "./query";

import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Page from "../layout";

import View from "./View";

// export const connectors = {
//   ethAccountsConnection: {
//     code: ethAccountsConnection,
//   },
// }

export const connectors = [
  {
    code: ethAccountsConnection,
  },
  {
    code: updateEthAccountProcessor,
    name: "updateEthAccountProcessor",
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

  // const code = ethAccountsConnection;

  // return compose(
  //   [graphql(gql(code))],
  // );
}


class AccountsPage extends Page {


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
      ...other
    } = this.props;

    return super.render(<Connector
      {...this.getPaginationData()}
      {...other}
    />);
  }
}


export default AccountsPage;