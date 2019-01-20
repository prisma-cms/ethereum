import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import View from "../../layout/View";


import Transaction from "./Transaction";
import { Paper } from 'material-ui';

class TransactionsView extends View {

  static propTypes = {
    ...View.propTypes,
    updateEthTransactionProcessor: PropTypes.func.isRequired,
  };


  render() {

    const {
      Grid,
      TransactionLink,
    } = this.context;


    const {
      data: {
        objectsConnection,
        loading,
      },
      updateEthTransactionProcessor,
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
                <Transaction
                  data={{
                    object: n,
                  }}
                  mutate={updateEthTransactionProcessor}
                />

                <p>
                  <TransactionLink
                    object={n}
                  >
                    View transaction
                </TransactionLink>
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


export default TransactionsView;