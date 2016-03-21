import React, {PropTypes} from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import EntitiesEditor from './EntitiesEditor.js'

export default class Toolbar extends React.Component {

  constructor(props) {
    super(props);
  }

  propTypes: {
    visible: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  }

  render() {
    return (
      <LeftNav width={200} openRight={true} open={this.props.visible} width={500} >
        <AppBar 
          title="JsECS devtools"
          zDepth={2}
          onLeftIconButtonTouchTap={this.props.toggle}
        />
        <Tabs>
          <Tab label="Entities">
            <EntitiesEditor/>
          </Tab>
          <Tab label="Systems">
            Hihi
          </Tab>
          <Tab label="Performance">
            Hihi
          </Tab>
        </Tabs>
      </LeftNav>
    );
  }
}
