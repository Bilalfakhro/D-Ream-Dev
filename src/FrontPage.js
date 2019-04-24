import React, { Component } from 'react';
import './App.css';
import img_elArtistMainPicBw from './images/FrontPage_elArtistMainPicBw_114248.jpg';


export default class FrontPage extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elArtistMainPicBw = {
        backgroundImage: 'url('+img_elArtistMainPicBw+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elTextBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="FrontPage" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="foreground">
          <div className='containerMinHeight elArtistMainPicBw' style={style_elArtistMainPicBw} />
          <div className='headlineFont elTextBlock' style={style_elTextBlock}>
            <div>{this.props.locStrings.frontpage_textblock_928127}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
