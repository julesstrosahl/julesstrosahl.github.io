import React from "react"
import App from '../components/App.js'
import Head from "../components/Head.js"
import {graphql} from 'gatsby';
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
    imageOne: file(relativePath: { eq: "Madison_Picnic_Point.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`