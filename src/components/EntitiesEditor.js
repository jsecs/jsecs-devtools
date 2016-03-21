import React, {PropTypes} from 'react';
import ComponentIcon from 'material-ui/lib/svg-icons/action/extension';
import EntityIcon from 'material-ui/lib/svg-icons/device/widgets';
import KeyIcon from 'material-ui/lib/svg-icons/communication/vpn-key';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import ComponentEditor from './ComponentEditor.js'
import TextField from 'material-ui/lib/text-field';
import _ from 'lodash'

export default class EntitiesEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      cid: null,
      eid: null
    }

    this.edit = (eid, cid) => () => {
      this.setState({
        editing:true,
        eid,
        cid
      });
    }

    this.closeEditDialog = () => {
      this.setState({editing:false});
    }

    this.actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.closeEditDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
  }

  propTypes: {
    visible: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  }

  render() {
    const data = [
    {
      id: 1231,
      a: {
        x:1,
        y:1
      },
      b: {
        x:1
      },
    },
    {
      id: 11,
      b: {
        y:11
      },
    },
    {
      id: 0,
      b: {
        y:11
      },
    },
    ]
    var editor = <div></div>
    if (this.state.editing) {
      editor = (
        <Dialog
          title={"Editing Component " + this.state.cid + " of Entity #" + this.state.eid}
          open={this.state.editing}
          actions={this.actions}
        >
          <ComponentEditor component={_.first(data, {id: this.state.eid})[this.state.cid]} />
        </Dialog>
      )
    }
    return (
      <div>
        {editor}
        <List>
          {data.map(o => 
            <ListItem
              id={o.id}
              primaryText={"Entity #" + o.id}
              primaryTogglesNestedList={true}
              leftIcon={<EntityIcon />}
              nestedItems={_.reject(_.keys(o), x => x === 'id').map(k => 
                <ListItem
                  key={k}
                  onTouchTap={this.edit(o.id, k)}
                  primaryText={"Component " + k}
                  leftIcon={<ComponentIcon />}
                  primaryTogglesNestedList={true}
                  nestedItems={_.keys(o[k]).map((v) => 
                    <ListItem
                      primaryText={
                        <TextField
                          style={{marginTop: -33}}
                          floatingLabelText={v}
                          value={o[k][v]}
                        />
                      }
                      leftIcon={<KeyIcon />}
                    />
                  )}
                />
              )
              }
            />
           )}
        </List>
      </div>
    );
  }
}
