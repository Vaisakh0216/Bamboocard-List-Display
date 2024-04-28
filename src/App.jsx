import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
    </BrowserRouter>
  );
}

export default App;
