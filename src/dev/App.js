import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";

import PrismaCmsApp from '@prisma-cms/front'
import { Renderer as PrismaCmsRenderer } from '@prisma-cms/front'

import * as queryFragments from "@prisma-cms/front/lib/schema/generated/api.fragments";

import App, {
  ContractsPage, 
  ContractPage,
  ContractCreatePage,
} from "../App";

import { Grid } from 'material-ui';

import {
  Link,
} from "react-router-dom";

import { withStyles } from 'material-ui';


export const styles = {
  menuItem: {
    display: "block",
    padding: "10px 15px",
  }
}

class DevRenderer extends PrismaCmsRenderer {


  static propTypes = {
    ...PrismaCmsRenderer.propTypes,
    pure: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    ...PrismaCmsRenderer.defaultProps,
    pure: false,
  }

  getRoutes() {

    return [
      {
        exact: true,
        path: "/",
        component: App,
      },
      {
        exact: true,
        path: "/eth-contracts",
        // component: ContractsPage,
        render: props => <ContractsPage
          {...props}
          where={{}}
          first={12}
          orderBy="createdAt_DESC"
        />
      },
      {
        exact: true,
        path: "/eth-contracts/create",
        component: ContractCreatePage,
      },
      {
        exact: true,
        path: "/eth-contracts/:contractId",
        component: ContractPage,
        // render: props => {

        //   return <ContractsPage
        //     {...props}
        //     where={{}}
        //     first={12}
        //     orderBy="createdAt_DESC"
        //   />;
        // }
      },
      // {
      //   path: "*",
      //   render: props => this.renderOtherPages(props),
      // },
    ].concat(super.getRoutes());

  }


  renderMenu() {

    const {
      classes,
    } = this.props;

    return <Fragment>
      {super.renderMenu()}

      <Grid
        container
      >

        <Grid
          item
        >
          <Link
            to="/eth-contracts"
            className={classes.menuItem}
          >
            Contracts
          </Link>
        </Grid>

        <Grid
          item
        >
          <Link
            to="/eth-contracts/create"
            className={classes.menuItem}
          >
            Create Contract
          </Link>
        </Grid>

      </Grid>

    </Fragment>
  }


  render() {

    const {
      pure,
      ...other
    } = this.props;

    return pure ? <App
      {...other}
    /> : super.render();

  }

}

export class DevApp extends Component {

  static propTypes = {
    queryFragments: PropTypes.object.isRequired,
  }

  static defaultProps = {
    queryFragments,
    lang: "ru",
  }

  render() {

    const {
      queryFragments,
      ...other
    } = this.props;

    return <PrismaCmsApp
      queryFragments={queryFragments}
      Renderer={DevRenderer}
      // pure={true}
      {...other}
    />
  }
}

export default withStyles(styles)(DevApp);
