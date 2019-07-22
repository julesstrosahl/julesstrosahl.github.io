import React, {Component} from 'react';
import './App.css';
import BackgroundImage from "gatsby-background-image"
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import resume from '../files/Resume.pdf';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard,faTimes } from '@fortawesome/free-solid-svg-icons'
import {faGithub,faLinkedin,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Document, Page } from 'react-pdf';
import Modal from 'react-bootstrap/Modal'

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
            <div className="icon" onClick={()=>this.props.toggleModalRef()}>
              <FontAwesomeIcon icon={faIdCard}/>
              <span class="sr-only">Résumé</span>
            </div>
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"1%"}}className="hc">
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

class DocModal extends Component
{
  constructor()
  {
    super();
  }
  render()
  {
    return(
      <Modal show={this.props.show} onHide={this.props.toggleModalRef} onShow={this.handleShow}size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveEmbed>
            <Document file={resume}>
              <Page ref={this.page} style={{position:"relative"}} pageNumber={1}/>
            </Document>
          </ResponsiveEmbed>
        </Modal.Body>
      </Modal>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {showModal:false};
  }
  toggleModal()
  {
    this.setState({showModal:!this.state.showModal});
  }
  render() {
  return (
    <div>
      <Parallax data={this.props.data} toggleModalRef={()=>this.toggleModal()}/>
      <DocModal show = {this.state.showModal} toggleModalRef={()=>this.toggleModal()}/>
    </div>);
  }
}

export default App;
