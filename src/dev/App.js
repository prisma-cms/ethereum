import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";

import PrismaCmsApp from '@prisma-cms/front'

import * as queryFragments from "../schema/generated/api.fragments";

import PrismaCmsRenderer from "./Renderer";

import App, {
  ContractSourcesPage,
  ContractSourcePage,
  ContractSourceCreatePage,

  AccountPage,
  AccountsPage,

  TransactionsPage,
  TransactionPage,
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


  getRoutes() {

    return [
      {
        exact: true,
        path: "/",
        component: App,
      },
      {
        exact: true,
        path: "/eth-contract-sources",
        // component: ContractSourcesPage,
        render: props => <ContractSourcesPage
          {...props}
          where={{}}
          first={12}
          orderBy="createdAt_DESC"
        />
      },
      {
        exact: true,
        path: "/eth-contract-sources/create",
        component: ContractSourceCreatePage,
      },
      {
        exact: true,
        path: "/eth-contract-sources/:contractSourceId",
        component: ContractSourcePage,
        // render: props => {

        //   return <ContractSourcesPage
        //     {...props}
        //     where={{}}
        //     first={12}
        //     orderBy="createdAt_DESC"
        //   />;
        // }
      },
      {
        exact: true,
        path: "/eth-accounts",
        // component: AccountsPage,
        render: props => <AccountsPage
          {...props}
          where={{
            type: "Contract",
          }}
          first={10}
          orderBy="createdAt_DESC"
        />
      },
      {
        exact: true,
        path: "/eth-accounts/:contractSourceId",
        component: AccountPage,
      },
      {
        exact: true,
        path: "/eth-transactions",
        // component: ContractSourcesPage,
        render: props => <TransactionsPage
          {...props}
          where={{}}
          first={10}
          orderBy="createdAt_DESC"
        />
      },
      {
        exact: true,
        path: "/eth-transactions/:transactionId",
        component: TransactionPage,
        // render: props => {

        //   return <ContractSourcesPage
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
            to="/eth-contract-sources"
            className={classes.menuItem}
          >
            ContractSources
          </Link>
        </Grid>

        <Grid
          item
        >
          <Link
            to="/eth-contract-sources/create"
            className={classes.menuItem}
          >
            Create ContractSource
          </Link>
        </Grid>

        <Grid
          item
        >
          <Link
            to="/eth-accounts"
            className={classes.menuItem}
          >
            Accounts
          </Link>
        </Grid>

        <Grid
          item
        >
          <Link
            to="/eth-transactions"
            className={classes.menuItem}
          >
            Transactions
          </Link>
        </Grid>

      </Grid>

    </Fragment>
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


  // componentDidMount() {

  //   // require('brace/mode/java');
  //   // require('brace/theme/monokai');
  //   require('ace-mode-solidity');

  // }

  render() {

    const {
      ...other
    } = this.props;

    return <PrismaCmsApp
      Renderer={DevRenderer}
      // pure={true}
      {...other}
    />
  }
}

export default withStyles(styles)(props => <DevApp {...props}/>);
