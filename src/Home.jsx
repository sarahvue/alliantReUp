import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import Differences from "./Differences";
import Services from "./Services";
import { Questionform } from "./Questionform";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <Services />
      <Differences />
      <Questionform />
      <Footer />
    </div>
  );
}

