import React, { Component } from 'react';
import Toolbar from './components/Toolbar.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/lib/icon-button';
import OpenIcon from 'material-ui/lib/svg-icons/action/open-in-new';
injectTapEventPlugin();

const buttonStyle = {
  position: 'fixed',
  top: 0,
  right: 0
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleToggle = () => {
      this.setState({
        visible: !this.state.visible
      });
    }
  }

  render() {
    return (
      <div>
        <IconButton 
          onTouchTap={this.handleToggle}
          tooltip="Toogle jsecs toolbar"
          touch={true}
          tooltipPosition="bottom-left"
          style={buttonStyle}
        >
          <OpenIcon />
        </IconButton>
        <Toolbar visible={this.state.visible} toggle={this.handleToggle} />
      </div>
    );
  }
}
