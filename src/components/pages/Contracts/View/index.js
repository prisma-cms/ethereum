import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import View from "../../layout/View";

import {
  Grid,
  ContractLink,
} from "../../../ui";

import Contract from "./Contract";
import { Paper } from 'material-ui';

class ContractsView extends View {

  static propTypes = {
    updateEthContractProcessor: PropTypes.func.isRequired,
  };


  render() {


    const {
      data: {
        objectsConnection,
        loading,
      },
      updateEthContractProcessor,
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
                <Contract
                  data={{
                    object: n,
                  }}
                  mutate={updateEthContractProcessor}
                />

                <p>
                  <ContractLink
                    object={n}
                  >
                    View contract
                </ContractLink>
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


export default ContractsView;