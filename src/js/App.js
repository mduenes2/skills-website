import React, {Component} from "react";

import '../css/App.css';
import '../css/text.css';
import '../css/photo.css';
import '../css/button.css';
import profPhoto from '../MichaelDuenes.jpg';


import {Box, createMuiTheme, MuiThemeProvider, Grid, Button} from "@material-ui/core";
import {aboutMe, experience, skills} from "./const";

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

                    <p className="subject-text">
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
                            Skills
                        </p>
                    </div>

                    <div className="grid-item">
                        <p className="subject-text">
                            {experience}
                        </p>
                    </div>

                    <div className="grid-item">
                       <p className="subject-text">
                           {skills}
                           <br/>
                           <li className="list-text">Java - Proficient</li>
                           <li className="list-text">C++ - Proficient</li>
                           <li className="list-text">React/Redux - Proficient</li>
                           <li className="list-text">JS, HTML, CSS - Proficient</li>
                           <li className="list-text">Cypress - Proficient</li>
                           <li className="list-text">Jest/Enzyme/Mocha - Proficient</li>
                           <li className="list-text">MySQL - Proficient</li>
                       </p>
                    </div>
                </div>
                <div>
                    <MuiThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" size="large"  className="ui-button" onClick={this.redirectFunction}>
                            Linkedin Account
                        </Button>
                    </MuiThemeProvider>
                </div>

            </header>
        </div>
      );
  }

  redirectFunction(){
      window.location.href = "https://www.linkedin.com/in/michael-duenes-21472219b/";
    }
}

export default App;
