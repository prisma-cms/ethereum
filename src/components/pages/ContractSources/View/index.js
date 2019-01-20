import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import View from "../../layout/View";

import ContractSource from "./ContractSource";
import { Paper } from 'material-ui';

class ContractSourcesView extends View {

  static propTypes = {
    ...View.propTypes,
    updateEthContractSourceProcessor: PropTypes.func.isRequired,
  };


  render() {


    const {
      Grid,
      ContractSourceLink,
    } = this.context;

    const {
      data: {
        objectsConnection,
        loading,
        refetch,
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
                    refetch,
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