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


import gql from 'graphql-tag'; 

import Prism from "prismjs";

import "prismjs/solidity";

import MonacoEditor from 'react-monaco-editor';

import * as solidity from "monaco-editor/min/vs/basic-languages/solidity/solidity.js";

import NumberField from "react-number-format";

// console.log("solidity", solidity);


const styles = theme => {

  return {

    root: {
    },
    codeWrapper: {
      whiteSpace: "pre-wrap",
    },
  }

}

class ContractSourceView extends EditableView {


  state = {
    ...super.state,
    showPasswordField: false,
    privateKey: "",
    amount: null,
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




  // onSave(result) {

  //   console.log("onSave result", result);

  //   // if (result) {

  //   //   const {
  //   //     data: object,
  //   //   } = result.data && result.data.response || {}


  //   //   const {
  //   //     id,
  //   //   } = object || {};

  //   //   if (id) {

  //   //     const {
  //   //       history,
  //   //     } = this.props;

  //       // history.push(`/eth-accounts/${id}/`);
  //   //   }

  //   // }

  // }


  getCacheKey() {

    const {
      id,
    } = this.getObject() || {};

    return `contractSource_${id || "new"}`;
  }


  async deployContractSource() {

    const {
      query: {
        createEthTransactionProcessor,
      },
    } = this.context;

    const {
      isDeploying,
      privateKey,
      amount,
    } = this.state;

    if (isDeploying) {
      return;
    }

    const {
      id,
    } = this.getObjectWithMutations();


    const {
      data: {
        refetch,
      },
    } = this.props;


    this.setState({
      isDeploying: true,
    });


    await this.mutate({
      mutation: gql(createEthTransactionProcessor),
      variables: {
        // where: {
        //   id,
        // },
        data: {
          type: "ContractCreate",
          privateKey,
          amount: amount ? parseFloat(amount) : undefined,
          contractSourceId: id,
        },
      },
    })
      .then(async () => {

        await refetch();

        this.setState({
          showPasswordField: false,
          privateKey: null,
          amount: null,
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
      privateKey,
      amount,
    } = this.state;

    let buttons = super.getButtons() || [];

    const {
      id,
    } = this.getObjectWithMutations() || {};

    const canEdit = this.canEdit();

    if (canEdit && id) {

      const {
        createEthTransactionProcessorQuery,
      } = this.props;


      if (showPasswordField) {

        // buttons.push(<TextField
        //   key="deployPassword"
        //   name="privateKey"
        //   label="Пароль"
        //   value={privateKey || ""}
        //   onChange={event => {
        //     const {
        //       value: privateKey,
        //     } = event.target;

        //     this.setState({
        //       privateKey,
        //     });
        //   }}
        // />);

        buttons.push(this.getTextField({
          Editor: NumberField,
          customInput: TextField,
          name: "amount",
          label: "Eth",
          fullWidth: false,
          value: amount || "",
          helperText: "Отправляемая сумма в Eth",
          onChange: event => {
            const {
              value: amount,
            } = event.target;

            this.setState({
              amount,
            });
          }
        }));

        buttons.push(this.getTextField({
          name: "privateKey",
          label: "Пароль",
          fullWidth: false,
          value: privateKey || "",
          helperText: "PK от вашего этериум-кошелька",
          onChange: event => {
            const {
              value: privateKey,
            } = event.target;

            this.setState({
              privateKey,
            });
          }
        }));

      }

      if (isDeploying) {

        buttons.push(<CircularProgress
          key="deployProcess"
        />);

      }
      else if (createEthTransactionProcessorQuery) {
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


  renderSource() {

    const {
      source
    } = this.getObjectWithMutations();

    const {
      classes,
    } = this.props;


    return <Fragment>
      <Typography
        color="textSecondary"
      >
        Код контракта
      </Typography>

      <div
        className={classes.codeWrapper}
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(source || "", Prism.languages.solidity, "solidity"),
        }}
      />
    </Fragment>
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
      Grid,
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

          {source ?
            <Grid
              item
              xs={12}
              md
            >
              {this.renderSource()}
            </Grid> : null
          }

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


    const {
      Grid,
    } = this.context;

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


      <Grid
        item
        xs={12}
      >
        {/* {this.renderSource()} */}
        <MonacoEditor
          width="100%"
          height="600"
          language="solidity"
          theme="vs-light"
          // theme="vs-dark"
          value={source || ""}
          options={{
            selectOnLineNumbers: true,
          }}
          onChange={(source, e) => {
            this.updateObject({
              source,
            });
          }}
          editorDidMount={(editor, monaco) => {

            monaco.editor.getModels().map(model => {

              model.updateOptions({
                tabSize: 2,
              });

            });

          }}
          editorWillMount={monaco => {

            // console.log("editorWillMount", monaco);

            const {
              conf,
              language,
            } = solidity;

            monaco.languages.register({
              id: "solidity",
            });

            // Register a tokens provider for the language
            monaco.languages.setMonarchTokensProvider('solidity', language);

          }}
        />
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


export default withStyles(styles)(props => <ContractSourceView {...props}/>);