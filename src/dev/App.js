import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";

import PrismaCmsApp from '@prisma-cms/front'
import { Renderer as PrismaCmsRenderer } from '@prisma-cms/front'

import * as queryFragments from "@prisma-cms/front/lib/schema/generated/api.fragments";

import App, {
  ContractSourcesPage,
  ContractSourcePage,
  ContractSourceCreatePage,

  AccountPage,

  TransactionsPage,
  TransactionPage,
} from "../App";

import { Grid } from 'material-ui';

import {
  Link,
} from "react-router-dom";

import {
  AccountLink,
  UserLink,
  TransactionLink,
} from "../components/ui";

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


  static childContextTypes = {
    ...PrismaCmsRenderer.childContextTypes,
    AccountLink: PropTypes.func,
    UserLink: PropTypes.func,
    TransactionLink: PropTypes.func,
  }


  getChildContext() {


    return {
      ...super.getChildContext(),
      AccountLink,
      UserLink,
      TransactionLink,
    }
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
        path: "/eth-contract-sources-accounts/:contractSourceId",
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
            to="/eth-transactions"
            className={classes.menuItem}
          >
            Transactions
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
