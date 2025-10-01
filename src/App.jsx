import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import { Resources } from "./Resources";
import Footer from "./Footer";
function App() {
  return (
    <div className="container">
      <Navigation />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
