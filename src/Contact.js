import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Contact extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      elText_visible: true,
    };
  }

  onClick_elButton = (ev) => {
    window.open('mailto:indieartist@example.com', '_blank');
  
  }
  
  
  onClick_elButtonCopy = (ev) => {
  
    this.setState({elText_visible: !this.state.elText_visible});
  
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const elText = this.state.elText_visible ? (
        <div className='headlineFont elText'>
          <div style={style_elText}>
            <div>{this.props.locStrings.contact_text_1010756}</div>
          </div>
        
        </div>
        
     ) : null;
    const style_elText2 = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontStyle: 'italic',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elTextCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elButtonCopy = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_elButtonCopy_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="Contact" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="layoutFlow">
          { elText }
          <div className='elText2'>
            <div style={style_elText2}>
              <div>{this.props.locStrings.contact_text2_380494}</div>
            </div>
          
          </div>
          
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.contact_button_815456}
            </Button>
          
          </div>
          
          <div className='baseFont elTextCopy'>
            <div style={style_elTextCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.contact_textcopy_519705.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='actionFont elButtonCopy' style={style_elButtonCopy_outer}>
            <Button style={style_elButtonCopy}  color="accent" onClick={this.onClick_elButtonCopy} >
              {this.props.locStrings.contact_buttoncopy_845993}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
