import React, {Component} from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import './App.css';
import resume from "../files/Resume.pdf";
import {Link} from "gatsby";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Parallax extends Component
{
  render()
  {
    return(
      <div style={{backgroundImage:`url('${require('../images/bg.jpg')}')`}} className="parallax">
        <img src={require('../images/jsicon.png')} style={{maxHeight: '20%',maxWidth:'20%', position: 'absolute'}} />
        <div style={{height:"100%",margin:'0px',padding:'0px'}}>
          <div style={{height: '50%',width:"100%",alignItems:"flex-end",backgroundColor:"transparent"}}className="jumbotron hc">
            <div className="vc">
            <img src={require('../images/gradfacemasked.png')} style={{maxHeight:"30%",maxWidth:"30%"}} className="img-circle" />
            <h1 style={{textShadow:"2px 2px 2px #fff"}}>Student.<br />Developer.</h1>
            </div>
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"2%"}}className="hc">
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
      </div>);
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
      <Parallax toggleModalRef={()=>this.toggleModal()}/>
      <DocModal show = {this.state.showModal} toggleModalRef={()=>this.toggleModal()}/>
    </div>);
  }
}

export default App;
