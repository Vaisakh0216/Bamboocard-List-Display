import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import ApiDocumentation from "./pages/ApiDocumentation";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/About" Component={About} />
        <Route path="/Services" Component={Services} />
        <Route path="/Career" Component={Career} />
        <Route path="/ApiDocumentation" Component={ApiDocumentation} />
        <Route path="/ContactUs" Component={ContactUs} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
