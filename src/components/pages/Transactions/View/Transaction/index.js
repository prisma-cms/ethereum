import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import EditableView from 'apollo-cms/lib/DataView/Object/Editable';

import withStyles from "material-ui/styles/withStyles";
import { Typography, IconButton, TextField } from 'material-ui';

import Editor from "@prisma-cms/editor";

// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/monokai';
import 'ace-mode-solidity';

import { CircularProgress } from 'material-ui/Progress';

import PublishIcon from "material-ui-icons/Publish";
import DoneIcon from "material-ui-icons/Done";
import DoneAllIcon from "material-ui-icons/DoneAll";

import moment from "moment";

import {
  Grid,
} from "../../../../ui"


const styles = theme => {

  return {

    root: {
    },

    table: {
      borderCollapse: "collapse",
      width: "100%",

      "& th, td": {
        textAlign: "left",
        verticalAlign: "center",
        padding: "5px 10px",
        border: "1px solid #ddd",
      },
    },
  }

}

class TransactionView extends EditableView {


  static propTypes = {
    ...EditableView.propTypes,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    ...EditableView.defaultProps,
  };

  static contextTypes = {
    ...EditableView.contextTypes,
    openLoginForm: PropTypes.func.isRequired,
    UserLink: PropTypes.func.isRequired,
  };


  state = {
    ...super.state,
    showPasswordField: false,
    password: "",
    isDeploying: false,
  }

  canEdit() {

    return false;
  }


  // save() {

  //   const {
  //     user: currentUser,
  //     openLoginForm,
  //   } = this.context;

  //   if (!currentUser) {

  //     return openLoginForm();
  //   }

  //   return super.save();
  // }


  // getCacheKey() {

  //   const {
  //     id,
  //   } = this.getObject() || {};

  //   return `transaction_${id || "new"}`;
  // }

  // getTitle(){

  //   const {
  //     address,
  //   } = this.getObjectWithMutations() || {};

  //   return address && [...address] || null;
  // }

  renderHeader() {

    return null;
  }

  renderDefaultView() {

    const {
      classes,
    } = this.props;


    const object = this.getObjectWithMutations();


    if (!object) {
      return null;
    }

    const {
      UserLink,
    } = this.context;


    const {
      id: transactionId,
      address,
      type,
      amount,
      Sender,
      Receiver,
    } = object;


    const {
      CreatedBy: SenderUser,
    } = Sender || {};


    const {
      CreatedBy: ReceiverUser,
    } = Receiver || {};

    const inEditMode = this.isInEditMode();
    const canEdit = this.canEdit();


    let transactionType = type;

    switch (type) {

      case "SendEth":

        transactionType = "Перевод эфира";

        break;

      case "ContractCreate":

        transactionType = "Создание контракта";

        break;

    }


    return <Grid
      container
      spacing={8}
    >


      <Grid
        item
        xs={12}
      >

        <table
          className={classes.table}
        >
          <tbody>

            <tr>
              <th>
                Адрес транзакции
              </th>
              <td>
                <a
                  href={`https://etherscan.io/tx/${address}`}
                  target="_blank"
                  rel="nowollow"
                >
                  {address}
                </a>
              </td>
            </tr>

            <tr>
              <th>
                Тип транзакции
              </th>
              <td>
                {transactionType}
              </td>
            </tr>

            {amount ?
              <tr>
                <th>
                  Сумма
              </th>
                <td>
                  {amount}
                </td>
              </tr>
              : null
            }

            {SenderUser ?
              <tr>
                <th>
                  Отправитель
              </th>
                <td>
                  <UserLink
                    user={SenderUser}
                  />
                </td>
              </tr>
              : null
            }

            {ReceiverUser ?
              <tr>
                <th>
                  Получатель
              </th>
                <td>
                  <UserLink
                    user={ReceiverUser}
                  />
                </td>
              </tr>
              : null
            }

          </tbody>
        </table>

      </Grid>


    </Grid>;
  }


  renderEditableView() {

    return this.renderDefaultView();

  }




  render() {

    const object = this.getObjectWithMutations();

    if (!object) {
      return null;
    }

    const {
      classes,
    } = this.props;

    return <div
      className={classes.root}
    >

      {super.render()}

    </div>

  }
}


export default withStyles(styles)(TransactionView);