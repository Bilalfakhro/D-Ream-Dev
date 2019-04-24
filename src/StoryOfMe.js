import React, { Component } from 'react';
import './App.css';
import img_elTrumpet from './images/StoryOfMe_elTrumpet_284727.jpg';


export default class StoryOfMe extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elTextBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elTrumpet = {
        backgroundImage: 'url('+img_elTrumpet+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elTextCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="StoryOfMe" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='headlineFont elTextBlock'>
            <div style={style_elTextBlock}>
              <div>{this.props.locStrings.storyofme_textblock_356422}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.storyofme_text_424913}</div>
            </div>
          
          </div>
          
          <div className='elTrumpet'>
            <div style={style_elTrumpet} />
          
          </div>
          
          <div className='baseFont elTextCopy'>
            <div style={style_elTextCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.storyofme_textcopy_767796.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
