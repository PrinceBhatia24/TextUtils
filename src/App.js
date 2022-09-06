import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("Dark Mode");
  const [alert, setAlert] = useState("null");

  const showAlert = (message) => {
    setAlert({
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("Light Mode");
      document.body.style.backgroundColor = "#181b1f";
      showAlert("Dark Mode Has been Enabled");
    } else {
      setMode("light");
      setColor("Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has been Enabled");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="Abouts"
        mode={mode}
        toggleMode={toggleMode}
        color={color}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert} />
        <About mode={mode} />
      </div>
    </>
  );
}
export default App;
