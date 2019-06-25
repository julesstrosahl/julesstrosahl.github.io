import React from "react";
import {Helmet} from "react-helmet";

class Head extends React.Component {
  render () {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Jack Strosahl</title>
                <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:600|Source+Code+Pro&display=swap" rel="stylesheet"></link>

                <script src="https://kit.fontawesome.com/0322e445d9.js"></script>
            </Helmet>
        </div>
    );
  }
};

export default Head;