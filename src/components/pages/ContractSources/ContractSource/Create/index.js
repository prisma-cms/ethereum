import React, { Component } from 'react';
import PropTypes from 'prop-types';


import ContractSourcePage from "../";

import {
  createEthContractSourceProcessor,
} from "../../query";

export const connectors = [
  {
    code: createEthContractSourceProcessor,
    // name: "createEthContractSourceProcessor",
  },
]



class ContractSourceCreatePage extends ContractSourcePage {


  static defaultProps = {
    ...ContractSourcePage.defaultProps,
    connectors,
    data: {
      object: {},
    },
    _dirty: {
      name: "",
    },
  }


  onSave(result) {

    // console.log("onSave result", result);

    if (result) {

      const {
        data: object,
      } = result.data && result.data.response || {}


      const {
        id,
      } = object || {};

      if (id) {

        const {
          history,
        } = this.props;

        history.push(`/eth-contract-sources/${id}/`);
      }

    }

  }


}


export default ContractSourceCreatePage;