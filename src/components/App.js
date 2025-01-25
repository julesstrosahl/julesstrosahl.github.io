import React, {Component} from 'react';
import './App.css';
import BackgroundImage from "gatsby-background-image"
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import resume from '../files/Resume.pdf';
import headshot from '../images/headshot.jpg';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';

class Icon extends Component
{
  render()
  {
    return(
        <a href={this.props.link}className="icon">
          <FontAwesomeIcon icon={this.props.fa}title={this.props.title} aria-hidden="true"/>
          <span className="sr-only">{this.props.title}</span>
        </a>
    );
  }
}

class Parallax extends Component
{
  render()
  {
      return(
      <BackgroundImage fluid={this.props.data.imageOne.childImageSharp.fixed} className="parallax">
        <div className="unselectable jsicon">
          {"{js}"}
        </div>
        <div style={{height:"100%",margin:'0px',padding:'0px'}}>
          <div style={{height: '50%',width:"100%",alignItems:"flex-end",backgroundColor:"transparent"}}className="hc vc">
              <div style={{display:"flex",justifyContent:"center", alignItems: "flex-end",width:"35%",flexDirection:"column"}} >
                <div>
                <Image alt="Headshot" src={headshot} roundedCircle style={{maxHeight:"25vmin",maxWidth:"25vmin"}} className="unselectable"/>
                <h3 style={{fontSize:"3vmin",color:"white", textShadow:"0px 0px 4px black", verticalAlign:"center"}}>Jules Strosahl</h3>
                </div>
              </div>
              <div style={{width:"50%",height:"25vmin", display: "flex", alignItems:"center", marginLeft:"3vmin"}}>
                <h1 className="unselectable" style={{fontSize:"7vmin",color:"white",textShadow:"0px 0px 4px #000000"}}>
                  <Typist avgTypingDelay={100}>
                    software<Typist.Delay ms={250}/><br/>engineer.
                  </Typist>
                </h1>
              </div>
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"2vmin"}}className="hc">
            <Icon title="Résumé" link={resume} fa={faIdCard}/>
            <Icon title="GitHub" link="https://github.com/julesstrosahl" fa={faGithub}/>
            <Icon title="LinkedIn" link="https://www.linkedin.com/in/JulesStrosahl/" fa={faLinkedin}/>
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
