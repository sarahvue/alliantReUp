import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import CoreValues from "./CoreValues";
import Footer from "./Footer";
function App() {
  return (
    <div className="container">
      <Navigation />
      <CoreValues />
      <Footer />
    </div>
  );
}

export default App;
