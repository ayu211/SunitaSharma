import "./App.css";
import Card from "./components/Card";
import Chronic from "./components/Chronic";
import EmailForm from "./components/EmailForm";
import MainForm from "./components/MainForm";
// import MedChart from './components/MedChart';
import Navbar from "./components/Navbar";
// import Numbers from './components/Numbers';
// import {data} from './components/data'

function App() {
  
  return (
    <>
    <div id="loader">
        <div id="wrapperload">
            <div class="elem">
              <h3>Hi Sunita Sharma</h3>
            </div>
            <div class="elem">
                <h3>Keep Smiling</h3>
            </div>
            <div class="elem">
                <h3>Eat good and Stay Healthy</h3>
            </div>
    </div>
    </div>
      <Navbar />
      <div className="whole">
        <Chronic />
        <MainForm />
        <EmailForm />
        <Card />
      </div>
    </>
  );
}

export default App;
