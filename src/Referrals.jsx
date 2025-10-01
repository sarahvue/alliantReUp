import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import { Process } from "./Process";
import Insurance from "./Insurances";

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <Process />
      <Insurance />
    </div>
  );
}
