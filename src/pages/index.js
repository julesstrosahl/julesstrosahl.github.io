import React from "react"
import App from '../components/App.js'
import Head from "../components/Head.js"
import FadeIn from 'react-fade-in';

class IndexPage extends React.Component
{
  constructor()
  {
    super();

    this.state={show:false};
  }
  componentDidMount()
  {
    setTimeout(()=>{this.setState({show:true});},1000);
  }
  render()
  {
  return(
    <div>
      <Head/>
      <App/>
    </div>);
  }
}

export default IndexPage
