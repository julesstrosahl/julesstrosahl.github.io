import React, {Component} from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import './App.css';
import resume from "../files/Resume.pdf";
import BackgroundImage from "gatsby-background-image"
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Parallax extends Component
{
  render()
  {
    return(
      <BackgroundImage onLoad={this.startTyping}fluid={this.props.data.imageOne.childImageSharp.fluid} className="parallax">
        {/*<img src={require('../images/jsicon.png')} style={{maxHeight: '20%',maxWidth:'20%', position: 'absolute'}} />*/}
        <div className="unselectable jsicon">
          {"{js}"}
        </div>
        <div style={{height:"100%",margin:'0px',padding:'0px'}}>
          <div style={{height: '50%',width:"100%",alignItems:"flex-end",backgroundColor:"transparent"}}className="hc vc">
                {/*
                <img src={require('../images/gradfacemasked.png')} style={{maxHeight:"25vmin",maxWidth:"25vmin"}} className="img-circle unselectable" />*/}
              <div style={{display:"flex",justifyContent:"flex-end",width:"50%"}} >
                <Image src={require('../images/gradfacemasked.png')} roundedCircle style={{maxHeight:"25vmin",maxWidth:"25vmin"}} className="unselectable"/>
              </div>
              <div style={{width:"50%"}}>
              <h1 className="unselectable" style={{fontSize:"7vmin",color:"white",textShadow:"0px 0px 4px #000000"}}>
              <Typist startDelay={1000} avgTypingDelay={150} stdTypingDelay={50}>
                student.<br/><Typist.Delay ms={500}/>developer.
              </Typist></h1></div>
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"2vmin"}}className="hc">
            <a className="icon" onClick={()=>this.props.toggleModalRef()}>
              <i title="Resume" className="fas fa-id-card"/>
            </a>
            {/*
            <Link to="/portfolio/" className="icon">
              <i title="Portfolio" className="fas fa-folder-open"/>
            </Link>*/}
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"1%"}}className="hc">
            <a href="https://github.com/jackstrosahl" className="icon"><i className="fab fa-github" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/jack-strosahl/" className="icon"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/strosahl" className="icon"><i className="fab fa-facebook" aria-hidden="true"></i></a>
            <a href="https://twitter.com/JackStrosahl" className="icon"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/jack_stro/" className="icon"><i className="fab fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>
      </BackgroundImage>);
  }
}

class DocModal extends Component
{
  render()
  {
    if(!this.props.show) return null;
    return(
      <div style={{position:"absolute",top:0,height:"100vh",width:"100%"}} className="vc hc">
      <Document onLoadError={console.error} renderMode="canvas" file={resume}>
      
        <Page pageNumber={1}>
          <button className ="icon" style={{position:"absolute",top:"0",right:"0",zIndex:"10"}} onClick={()=>this.props.toggleModalRef()}>
            <i className="fas fa-times" style={{color:"red"}}/>
          </button>
        </Page>
      </Document>
      </div>
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
