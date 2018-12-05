import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import EditableView from 'apollo-cms/lib/DataView/Object/Editable';

import withStyles from "material-ui/styles/withStyles";
import { Typography, IconButton } from 'material-ui';

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

import {
  Grid,
} from "../../../../ui"


const styles = theme => {

  return {

    root: {
    },
  }

}

class ContractView extends EditableView {


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
  };


  canEdit() {

    const {
      user: currentUser,
    } = this.context;

    const {
      id: currentUserId,
      sudo,
    } = currentUser || {};


    const {
      id,
      CreatedBy,
    } = this.getObjectWithMutations() || {};


    const {
      id: createdById,
    } = CreatedBy || {}

    return !id || (createdById && createdById === currentUserId) || sudo === true;
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

    return `contract_${id || "new"}`;
  }


  getButtons() {

    let buttons = super.getButtons() || [];

    const {
      id,
      txHash,
    } = this.getObjectWithMutations() || {};

    const canEdit = this.canEdit();

    if (canEdit && id) {

      if (txHash) {
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
      classes,
    } = this.props;


    const object = this.getObjectWithMutations();


    if (!object) {
      return null;
    }

    const {
      id: contractId,
      description,
      source,
    } = object;


    const inEditMode = this.isInEditMode();
    const canEdit = this.canEdit();


    return <Grid
      container
      spacing={8}
    >

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

      {source ?
        <Grid
          item
          xs={12}
        >
          <Typography
            color="textSecondary"
          >
            Описание контракта
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
      }


    </Grid>;
  }


  renderEditableView() {


    const object = this.getObjectWithMutations();


    if (!object) {
      return null;
    }

    const {
      id: contractId,
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

      <Grid
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


      </Grid>


    </Grid>;
  }



  renderResetButton() {

    const {
      id,
    } = this.getObjectWithMutations() || {}

    return id ? super.renderResetButton() : null;
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


export default withStyles(styles)(ContractView);