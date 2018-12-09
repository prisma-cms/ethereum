import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import EditableView from 'apollo-cms/lib/DataView/Object/Editable';

import withStyles from "material-ui/styles/withStyles";
import { Typography, IconButton, TextField } from 'material-ui';

import Editor from "@prisma-cms/editor";

// import AceEditor from 'react-ace';

import { CircularProgress } from 'material-ui/Progress';

import PublishIcon from "material-ui-icons/Publish";
import DoneIcon from "material-ui-icons/Done";
import DoneAllIcon from "material-ui-icons/DoneAll";

import moment from "moment";

import {
  Grid,
} from "../../../../ui"

import gql from 'graphql-tag';

import {
  deployEthContractSourceProcessor,
} from "../../query";

const styles = theme => {

  return {

    root: {
    },
  }

}

class ContractSourceView extends EditableView {


  static propTypes = {
    ...EditableView.propTypes,
    classes: PropTypes.object.isRequired,
    deployEthContractSourceProcessorQuery: PropTypes.object.isRequired,
  };

  static defaultProps = {
    ...EditableView.defaultProps,
    deployEthContractSourceProcessorQuery: gql(deployEthContractSourceProcessor),
  };

  static contextTypes = {
    ...EditableView.contextTypes,
    openLoginForm: PropTypes.func.isRequired,
    AccountLink: PropTypes.func.isRequired,
    UserLink: PropTypes.func.isRequired,
  };


  state = {
    ...super.state,
    showPasswordField: false,
    password: "",
    isDeploying: false,
  }

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

    return `contractSource_${id || "new"}`;
  }


  async deployContractSource() {

    const {
      isDeploying,
      password,
    } = this.state;

    if (isDeploying) {
      return;
    }

    const {
      id,
    } = this.getObjectWithMutations();


    const {
      deployEthContractSourceProcessorQuery,
    } = this.props;


    this.setState({
      isDeploying: true,
    });


    await this.mutate({
      mutation: deployEthContractSourceProcessorQuery,
      variables: {
        where: {
          id,
        },
        data: {
          password,
        },
      },
    })
      .then(() => {

        this.setState({
          showPasswordField: false,
          password: null,
        });

      })
      .catch(error => {

      });

    this.setState({
      isDeploying: false,
    });

  }


  getButtons() {

    const {
      isDeploying,
      showPasswordField,
      password,
    } = this.state;

    let buttons = super.getButtons() || [];

    const {
      id,
    } = this.getObjectWithMutations() || {};

    const canEdit = this.canEdit();

    if (canEdit && id) {

      const {
        deployEthContractSourceProcessorQuery,
      } = this.props;


      if (showPasswordField) {

        // buttons.push(<TextField
        //   key="deployPassword"
        //   name="password"
        //   label="Пароль"
        //   value={password || ""}
        //   onChange={event => {
        //     const {
        //       value: password,
        //     } = event.target;

        //     this.setState({
        //       password,
        //     });
        //   }}
        // />);

        buttons.push(this.getTextField({
          name: "password",
          label: "Пароль",
          fullWidth: false,
          value: password || "",
          helperText: "PK от вашего этериум-кошелька",
          onChange: event => {
            const {
              value: password,
            } = event.target;

            this.setState({
              password,
            });
          }
        }));
      }

      if (isDeploying) {

        buttons.push(<CircularProgress
          key="deployProcess"
        />);

      }
      else if (deployEthContractSourceProcessorQuery) {
        buttons.push(<IconButton
          key="deploy"
          onClick={event => {

            if (showPasswordField) {
              this.deployContractSource()
            }
            else {
              this.setState({
                showPasswordField: true,
              });
            }
          }}
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
      AccountLink,
      UserLink,
    } = this.context;


    const {
      id: contractSourceId,
      description,
      source,
      Accounts,
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

                return <Grid
                  key={id}
                  container
                  alignItems="center"
                  style={{
                    marginBottom: 30,
                  }}
                >
                  <AccountLink
                    object={n}
                  />
                  <UserLink
                    user={CreatedBy}
                  /> {moment(createdAt).format('lll')}
                </Grid>

              })}
            </Grid>

            : null
          }

        </Grid>

      </Grid>



    </Grid>;
  }


  renderEditableView() {


    const object = this.getObjectWithMutations();


    if (!object) {
      return null;
    }

    const {
      id: contractSourceId,
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


export default withStyles(styles)(ContractSourceView);