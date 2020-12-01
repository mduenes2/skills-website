import React, {Component} from "react";

import '../css/App.css';
import '../css/text.css';
import '../css/photo.css'
import profPhoto from '../MichaelDuenes.jpg';


import {Box, createMuiTheme, MuiThemeProvider, Grid, Button} from "@material-ui/core";
import {aboutMe} from "./const";

const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#86c232'
        },
    },
});

class App extends Component{

  render() {
      return (
        <div className="App">
            <header className="App-header">
                <p className="title">
                    Hello, my name is Michael Duenes
                </p>

                <Box className="about-me-container">

                    <p className="about-me-title">
                        About me
                    </p>

                    <p className="about-me-text">
                        {aboutMe}
                    </p>

                    <img src={profPhoto} className="profPhoto" alt="" />
                </Box>

                <div className="grid-container">
                    <div className="grid-item">
                        <p className = "sub-title">
                            Experience
                        </p>
                    </div>
                    <div className="grid-item">
                        <p className="sub-title">
                            pepe
                        </p>
                    </div>
                    <div>

                    </div>
                </div>

            </header>
        </div>
      );
  }
}

export default App;
