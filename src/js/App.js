import profPhoto from '../MichaelDuenes.jpg';
import '../css/App.css';
import '../css/text.css';
import '../css/photo.css'
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <p className="title">
            Hello, my name is Michael Duenes
        </p>
            <Grid container spacing={10} justify="center">
                <img src={profPhoto} className="profPhoto" alt="this is my photo"/>
                <p className="about-me-title">
                    About me
                </p>
            </Grid>
    </header>
    </div>
  );
}

export default App;
