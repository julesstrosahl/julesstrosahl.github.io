import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div style={{backgroundImage:`url('${require('./bg.jpg')}')`}} className="parallax">
        <img src={require('./jsicon.png')} style={{maxHeight: '20%',maxWidth:'20%', position: 'absolute'}} />
        <div style={{height: '100%',backgroundColor:'transparent',margin:'0px',padding:'0px'}} className="vc hc jumbotron jumbotron-fluid">
          <img src={require('./gradfacemasked.png')} style={{maxWidth: '30%'}} className="img-circle" />
          <h1 className="display-1">Student.<br />Developer.</h1>
        </div>
      </div>
      <iframe class="doc" style={{width:'100%',height:'100%'}} src="https://docs.google.com/gview?url=http://strosahl.org/resume.docx&embedded=true"></iframe>
    </div>
  );
}

export default App;
