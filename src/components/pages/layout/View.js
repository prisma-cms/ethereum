import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Context from "@prisma-cms/context";

class PageView extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  static contextType = Context;


  renderPagination() {

    const {
      data: {
        objectsConnection,
        variables,
      },
    } = this.props;


    if (!objectsConnection || !variables) {
      return null;
    }

    const {
      uri,
      Pagination,
    } = this.context;


    const {
      aggregate: {
        count: total,
      },
    } = objectsConnection;

    const {
      first: limit,
    } = variables;

    if (!limit || !total) {
      return null;
    }

    const {
      page,
    } = uri.query(true);

    return <Pagination
      page={page && parseInt(page) || 1}
      limit={limit}
      total={total}
    />
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}


export default PageView;