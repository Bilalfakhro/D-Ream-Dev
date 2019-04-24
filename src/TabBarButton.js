import React, { Component } from 'react';
import './App.css';


export default class TabBarButton extends Component {

  // Properties used by this component:
  // title, visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elTitle = {
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'center',
     };
    const value_title = this.props.title;
    
    
    return (
      <div className="TabBarButton" style={baseStyle}>
        <div className="foreground">
          <div className='baseFont state0_elTitle' style={style_state0_elTitle}>
            <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.tabbarbutton_title_398788}</span>)}</div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state1_elTitle = {
        color: '#0093d5',
        textAlign: 'center',
     };
    const value_title = this.props.title;
    
    const style_state1_elSelectionMarker = {
        background: 'rgba(58, 168, 255, 1.000)',
     };
    
    return (
      <div className="TabBarButton" style={baseStyle}>
        <div className="foreground">
          <div className='baseFont state1_elTitle' style={style_state1_elTitle}>
            <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.tabbarbutton_title_266824}</span>)}</div>
          </div>
          <div className='state1_elSelectionMarker' style={style_state1_elSelectionMarker} />
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
