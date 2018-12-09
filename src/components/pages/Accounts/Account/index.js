import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  ethAccount,
} from "../query";

import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Page from "../../layout";

import View from "../View/Account";

export const connectors = [
  {
    code: ethAccount,
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
 
}


class AccountPage extends Page {


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


export default AccountPage;