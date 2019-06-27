import React from "react"
import App from '../components/App.js'
import Head from "../components/Head.js"
import Img from "gatsby-image"
class IndexPage extends React.Component
{
  constructor({data})
  {
    super();

    this.data = {data};
  }
  render()
  {
  return(
    <div>
      <Head/>
      <App data={this.data.data}/>
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