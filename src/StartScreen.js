import React, { Component } from 'react';
import './App.css';
import FrontPage from './FrontPage';
import StoryOfMe from './StoryOfMe';
import Contact from './Contact';
import TabBarButton from './TabBarButton';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      elTabContent_stateIndex: 0,
      selectedIndex_selector: 0,
    };
  }

  selectorSelectionChanged = (idx, ev) => {
    this.setState({selectedIndex_selector: idx});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
     };
    let contentElement_elTabContent;
    switch (this.state.selectedIndex_selector) {
      default:
      case 0:
        contentElement_elTabContent = (<FrontPage {...this.props} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
      break;
      case 1:
        contentElement_elTabContent = (<StoryOfMe {...this.props} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
      break;
      case 2:
        contentElement_elTabContent = (<Contact {...this.props} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
      break;
    }
    
    const style_elRectangle = {
        background: 'rgba(250, 250, 250, 0.914)',
     };
    const style_elSelector = {
        overflow: 'hidden',  // This element is not in scroll flow
     };
    // eslint-disable-next-line no-unused-vars
    const style_elSelector_part = {
        display: 'inline-block',
        position: 'relative',
        width: '113px',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elTabContent'>
            <div>
              {contentElement_elTabContent}
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRectangle' style={style_elRectangle} />
            <div className='hasNestedComps elSelector' style={style_elSelector}>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 0)}><TabBarButton visualStateIndex={this.state.selectedIndex_selector === 0 ? 1 : 0} title='Home' appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} /></div>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 1)}><TabBarButton visualStateIndex={this.state.selectedIndex_selector === 1 ? 1 : 0} title='Story of me' appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} /></div>
              <div style={style_elSelector_part}  onClick={this.selectorSelectionChanged.bind(this, 2)}><TabBarButton visualStateIndex={this.state.selectedIndex_selector === 2 ? 1 : 0} title='Contact' appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
