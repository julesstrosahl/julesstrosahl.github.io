import React, {Component} from 'react';
import './App.css';
import BackgroundImage from "gatsby-background-image"
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import resume from '../files/Resume.pdf';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import {faGithub,faLinkedin,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';

class Icon extends Component
{
  render()
  {
    return(
        <a href={this.props.link}className="icon">
          <FontAwesomeIcon icon={this.props.fa}title={this.props.title} aria-hidden="true"/>
          <span class="sr-only">{this.props.title}</span>
        </a>
    );
  }
}

class Parallax extends Component
{
  render()
  {
      return(
      <BackgroundImage fluid={this.props.data.imageOne.childImageSharp.fluid} className="parallax">
        <div className="unselectable jsicon">
          {"{js}"}
        </div>
        <div style={{height:"100%",margin:'0px',padding:'0px'}}>
          <div style={{height: '50%',width:"100%",alignItems:"flex-end",backgroundColor:"transparent"}}className="hc vc">
              <div style={{display:"flex",justifyContent:"flex-end",width:"35%"}} >
                <Image alt="Headshot" src={require('../images/gradfacemasked.png')} roundedCircle style={{maxHeight:"25vmin",maxWidth:"25vmin"}} className="unselectable"/>
              </div>
              <div style={{width:"50%"}}>
              <h1 className="unselectable" style={{fontSize:"7vmin",color:"white",textShadow:"0px 0px 4px #000000"}}>
              <Typist avgTypingDelay={100}>
                student.<Typist.Delay ms={250}/><br/>developer.
              </Typist></h1></div>
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"2vmin"}}className="hc">
            <Icon title="Résumé" link={resume} fa={faIdCard}/>
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"2vmin"}}className="hc">
            <Icon title="GitHub" link="https://github.com/jackstrosahl" fa={faGithub}/>
            <Icon title="LinkedIn" link="https://www.linkedin.com/in/jack-strosahl/" fa={faLinkedin}/>
            <Icon title="Facebook" link="https://www.facebook.com/strosahl" fa={faFacebook}/>
            <Icon title="Twitter" link="https://twitter.com/JackStrosahl" fa={faTwitter}/>
            <Icon title="Instagram" link="https://www.instagram.com/jack_stro/" fa={faInstagram}/>
          </div>
        </div>
      </BackgroundImage>);
  }
}

class App extends Component {
  render() {
  return (
    <div>
      <Parallax data={this.props.data} toggleModalRef={()=>this.toggleModal()}/>
    </div>);
  }
}

export default App;
