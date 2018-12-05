import React, { Component } from 'react';
import PropTypes from 'prop-types';


import ContractPage from "../";

import {
  createEthContractProcessor,
} from "../../query";

export const connectors = [
  {
    code: createEthContractProcessor,
    // name: "createEthContractProcessor",
  },
]



class ContractCreatePage extends ContractPage {


  static defaultProps = {
    ...ContractPage.defaultProps,
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

        history.push(`/eth-contracts/${id}/`);
      }

    }

  }


}


export default ContractCreatePage;