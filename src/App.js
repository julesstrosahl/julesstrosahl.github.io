import React, {Component} from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import logo from './logo.svg';
import './App.css';
import resume from "./Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Parallax extends Component
{
  render()
  {
    return(
      <div style={{backgroundImage:`url('${require('./bg.jpg')}')`}} className="parallax">
        <img src={require('./jsicon.png')} style={{maxHeight: '20%',maxWidth:'20%', position: 'absolute'}} />
        <div style={{height:"100%",margin:'0px',padding:'0px'}}>
          <div style={{height: '50%',width:"100%",alignItems:"flex-end"}}className="hc">
            <img src={require('./gradfacemasked.png')} style={{maxHeight:"30%",maxWidth:"30%"}} className="img-circle" />
            <h1 className="display-1">Student.<br />Developer.</h1>
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"1%"}}className="hc">
            <button className="icon" onClick={()=>this.props.toggleModalRef()}>
              <i title="Resume" className="fas fa-file fa-3x"/>
            </button>
            <button className="icon">
              <i title="Portfolio" className="fas fa-folder-open fa-3x"/>
            </button>
          </div>
          <div style={{flexBasis:"100%",height:"0"}}></div>
          <div style={{marginTop:"1%"}}className="hc">
            <a href="https://github.com/jackstrosahl" className="icon"><i className="fab fa-github fa-3x" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/jack-strosahl/" className="icon"><i class="fab fa-linkedin fa-3x" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/strosahl" className="icon"><i class="fab fa-facebook fa-3x" aria-hidden="true"></i></a>
            <a href="https://twitter.com/JackStrosahl" className="icon"><i class="fab fa-twitter fa-3x" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/jack_stro/" className="icon"><i class="fab fa-instagram fa-3x" aria-hidden="true"></i></a>
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
      <Document onLoadError={console.error} file={resume}>
      
        <Page pageNumber={1}>
          <button className ="icon" style={{position:"absolute",top:"0",right:"0",zIndex:"10"}} onClick={()=>this.props.toggleModalRef()}>
            <i className="fas fa-times fa-4x" style={{color:"red"}}/>
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
