import React from "react"
import Head from "../components/Head.js"

class Page404 extends React.Component
{
    render()
    {
        return(
            <div className="vc hc" style={{flexWrap:"Wrap",width:"100vw",height:"100vh",padding:"0"}}>
                <Head/>
                <h1>Whoops!</h1>
                <div style={{flexBasis:"100%",height:"0"}} />
                <p>{this.props.location.pathname} doesn't exist.</p>
            </div>
        );
    }
}

export default Page404