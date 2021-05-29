import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./assets/plugins/css/bootstrap.min.css";
import Resume from "./Components/resume.component";
import "./assets/css/styles.css";
import "./assets/css/responsive.css";
import "./assets/plugins/css/animate.css";
import "./assets/icons/font-awesome-4.7.0/css/font-awesome.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Resume} />
      </div>
    </Router>
  );
}

export default App;
