import React from "react";
import {Helmet} from "react-helmet";

class Head extends React.Component {
  render () {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Jules Strosahl</title>
            </Helmet>
        </div>
    );
  }
};

export default Head;