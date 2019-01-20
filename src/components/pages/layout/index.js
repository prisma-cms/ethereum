import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Context from "@prisma-cms/context";

class PageLayout extends Component {

  static propTypes = {
    connectors: PropTypes.array.isRequired,
    View: PropTypes.func.isRequired,
  };

  static defaultProps = {
  }

  static contextType = Context;

  state = {}


  getPaginationData(){


    const {
      first,
      where,
    } = this.props;

    const {
      uri,
    } = this.context;


    let {
      page,
    } = uri.query(true);


    let skip;

    page = page && parseInt(page) || 0;

    if (first && page > 1) {
      skip = (page - 1) * first;
    }

    return {
      first,
      skip,
      page,
    }
  }

  render(content) {
    return content || null;
  }

}


export default PageLayout;