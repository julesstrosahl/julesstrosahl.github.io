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
      <p style={{position:"absolute", bottom:"1px", left:"1px",fontSize:"12px"}}>Image By <a href="//commons.wikimedia.org/w/index.php?title=User:Av9&amp;amp;action=edit&amp;amp;redlink=1" class="new" title="User:Av9 (page does not exist)">Av9</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=74777664">Link</a></p>
    </div>);
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Madison_Picnic_Point.jpg" }) {
      childImageSharp {
        fixed(width:5956) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`