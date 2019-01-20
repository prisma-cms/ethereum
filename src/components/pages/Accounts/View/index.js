import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import View from "../../layout/View";

import {
  Grid,
  AccountLink,
} from "../../../ui";

import Account from "./Account";
import { Paper } from 'material-ui';

class AccountsView extends View {

  static propTypes = {
    updateEthAccountProcessor: PropTypes.func.isRequired,
  };


  render() {


    const {
      data: {
        objectsConnection,
        loading,
      },
      updateEthAccountProcessor,
    } = this.props;


    if (!objectsConnection) {
      // if(loading){
      //   return null;
      // }
      return null;
    }



    const items = objectsConnection.edges.map(({ node }) => node);

    return (
      <Fragment>
        <Grid
          container
          spacing={16}
        >
          {items.map(n => {

            const {
              id,
              name,
            } = n;

            return <Grid
              key={id}
              item
              xs={12}
            >
              <Paper
                style={{
                  padding: 15,
                }}
              >
                <Account
                  data={{
                    object: n,
                  }}
                  mutate={updateEthAccountProcessor}
                />

                <p>
                  <AccountLink
                    object={n}
                  >
                    View account
                  </AccountLink>
                </p>
              </Paper>
            </Grid>

          })}
        </Grid>
        {this.renderPagination()}
      </Fragment>
    );
  }
}


export default AccountsView;