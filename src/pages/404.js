import React from "react"
import Head from "../components/Head.js"
import {Link} from "gatsby"

class Page404 extends React.Component
{
    render()
    {
        return(
            <div className="vc hc" style={{width:"100vw",height:"100vh"}}>
                <Head/>
                <div className="hc" style={{flexWrap:"wrap",alignContent:"flex-start"}}>
                    
                    <h1>Whoops!</h1>
                    <div style={{flexBasis:"100%",height:"0"}} />
                    <p>{this.props.location.pathname} doesn't exist.</p>
                    <div style={{flexBasis:"100%",height:"0"}} />
                    <Link to="/">Home</Link>
                </div>
            </div>);
    }
}

export default Page404