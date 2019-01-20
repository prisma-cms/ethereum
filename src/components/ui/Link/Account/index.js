import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from "material-ui/Typography";


import Link from '../';

import { withStyles } from 'material-ui/styles';

const styles = {
};


export class AccountLink extends Component {

  render() {

    const {
      object,
      children,
      ...other
    } = this.props;


    if (!object) {
      return null;
    }

    const {
      id,
      name,
      address,
    } = object;


    if ((!name && !address) || !id) {
      return null;
    }

    return <Link
      to={`/eth-accounts/${id}`}
      title={name || address}
      {...other}
    >
      {children || <Typography
        component="span"
      >
        {name || address}
      </Typography>}
    </Link>
  }
}


export default withStyles(styles)(AccountLink);