import React from "react"
import App from '../components/App.js'
import Head from "../components/Head.js"
import Img from "gatsby-image"
class IndexPage extends React.Component
{
  constructor({data})
  {
    super();

    this.state={show:false,data:{data}};
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
      <App data={this.state.data.data}/>
    </div>);
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`