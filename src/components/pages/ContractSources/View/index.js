import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import View from "../../layout/View";

import {
  Grid,
  ContractSourceLink,
} from "../../../ui";

import ContractSource from "./ContractSource";
import { Paper } from 'material-ui';

class ContractSourcesView extends View {

  static propTypes = {
    updateEthContractSourceProcessor: PropTypes.func.isRequired,
  };


  render() {


    const {
      data: {
        objectsConnection,
        loading,
      },
      updateEthContractSourceProcessor,
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
                <ContractSource
                  data={{
                    object: n,
                  }}
                  mutate={updateEthContractSourceProcessor}
                />

                <p>
                  <ContractSourceLink
                    object={n}
                  >
                    View contractSource
                </ContractSourceLink>
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


export default ContractSourcesView;