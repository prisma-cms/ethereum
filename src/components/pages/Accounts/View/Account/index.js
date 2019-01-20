import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import EditableView from 'apollo-cms/lib/DataView/Object/Editable';

import withStyles from "material-ui/styles/withStyles";
import { Typography, IconButton } from 'material-ui';

import Editor from "@prisma-cms/editor";


import PublishIcon from "material-ui-icons/Publish";
import DoneIcon from "material-ui-icons/Done";

import moment from "moment";


const styles = theme => {

  return {

    root: {
    },
  }

}

class AccountView extends EditableView {


  static propTypes = {
    ...EditableView.propTypes,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    ...EditableView.defaultProps,
  };


  canEdit() {

    // const {
    //   user: currentUser,
    // } = this.context;

    // const {
    //   id: currentUserId,
    //   sudo,
    // } = currentUser || {};


    // const {
    //   id,
    //   CreatedBy,
    // } = this.getObjectWithMutations() || {};


    // const {
    //   id: createdById,
    // } = CreatedBy || {}

    // return !id || (createdById && createdById === currentUserId) || sudo === true;

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


  getCacheKey() {

    const {
      id,
    } = this.getObject() || {};

    return `account_${id || "new"}`;
  }


  getButtons() {

    let buttons = super.getButtons() || [];

    const {
      id,
      address,
    } = this.getObjectWithMutations() || {};

    const canEdit = this.canEdit();

    if (canEdit && id) {

      if (address) {
        buttons.push(
          <DoneIcon
            key="done"
            color="green"
          />
        );
      }
      else {
        buttons.push(<IconButton
          key="deploy"
        >
          <PublishIcon />
        </IconButton>);
      }

    }

    return buttons;
  }


  renderDefaultView() {

    const {
      Grid,
    } = this.context;

    const {
      classes,
    } = this.props;


    const object = this.getObjectWithMutations();


    if (!object) {
      return null;
    }

    const {
      id: accountId,
      description,
      source,
      address,
      balance,
      Accounts,
    } = object;


    const inEditMode = this.isInEditMode();
    const canEdit = this.canEdit();


    return <Grid
      container
      spacing={8}
    >

      {address ?
        <Grid
          item
          xs={12}
        >
          <a
            href={`https://etherscan.io/address/${address}`}
            target="_blank"
            rel="nofollow"
          >
            {address}
          </a>
        </Grid> : null
      }

      {description ?
        <Grid
          item
          xs={12}
        >
          <Typography
            color="textSecondary"
          >
            Описание контракта
          </Typography>
          <Editor
            value={description}
          />
        </Grid> : null
      }

      <Grid
        item
        xs={12}
      >
        <table>
          <tbody>
            <tr>
              <th>
                Баланс Eth
              </th>
              <td>
                {balance}
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>

      <Grid
        item
        xs={12}
      >

        <Grid
          container
          spacing={16}
        >

          {/* {source ?
            <Grid
              item
              xs={12}
              md
            >
              <Typography
                color="textSecondary"
              >
                Код контракта
              </Typography>
              <AceEditor
                // mode="java"
                mode="solidity"
                theme="monokai"
                name="source"
                value={source}
                readOnly={true}
                editorProps={{ $blockScrolling: true }}
              />
            </Grid> : null
          } */}

          {Accounts && Accounts.length ?


            <Grid
              item
            >
              <Typography
                color="textSecondary"
              >
                Опубликованные контракты
              </Typography>

              {Accounts.map(n => {

                const {
                  id,
                  createdAt,
                  address,
                  CreatedBy,
                } = n;

                if (!address) {
                  return address;
                }

                return <Typography
                  key={id}
                >
                  {moment(createdAt).format('lll')} <a
                    href={`https://etherscan.io/address/${address}`}
                    target="_blank"
                  >
                    {address}
                  </a>
                </Typography>

              })}
            </Grid>

            : null
          }

        </Grid>

      </Grid>



    </Grid>;
  }


  renderEditableView() {

    const {
      Grid,
    } = this.context;

    const object = this.getObjectWithMutations();


    if (!object) {
      return null;
    }

    const {
      id: accountId,
      description,
      source,
    } = object;


    return <Grid
      container
      spacing={8}
    >

      <Grid
        item
        xs={12}
      >
        {this.getTextField({
          name: "name",
          label: "Название контракта",
        })}
      </Grid>

      <Grid
        item
        xs={12}
      >
        <Typography
          color="textSecondary"
        >
          Описание контракта
        </Typography>

        {this.getTextField({
          name: "description",
          label: "Описание контракта",
          Editor,
          readOnly: false,
          value: description || null,
          onChange: description => this.updateObject({
            description,
          }),
        })}
      </Grid>

      {/* <Grid
        item
        xs={12}
      >
        <Typography
          color="textSecondary"
        >
          Исходный код контракта
        </Typography>

        {this.getTextField({
          name: "source",
          Editor: AceEditor,
          mode: "solidity",
          theme: "monokai",
          readOnly: false,
          value: source || "",
          onChange: source => this.updateObject({
            source,
          }),
          readOnly: false,
        })}


      </Grid> */}


    </Grid>;
  }



  renderResetButton() {

    const {
      id,
    } = this.getObjectWithMutations() || {}

    return id ? super.renderResetButton() : null;
  }



  render() {

    if (typeof window === "undefined") {
      return null;
    }

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


export default withStyles(styles)(AccountView);