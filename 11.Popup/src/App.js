import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Popup from "./components/Popup";

function App() {
  const [showPop, setShowPop] = useState(false);
  const [timePop, setTimePop] = useState(false);

  const handlePop = () => {
    setShowPop(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimePop(true);
    }, 3000);
  }, []);

  return (
    <div className="mt-5" style={{ zindex: "-1" }}>
      <div className="text-center">
        <h4>Click for Popup or wait 3 seconds </h4>
        <Button className="mt-5" onClick={handlePop}>
          {" "}
          Click{" "}
        </Button>
      </div>
      {showPop && (
        <Popup
          type={"info"}
          handlClose={setShowPop}
          title={"PopUp"}
          text={"click PopUp is here"}
        />
      )}
      {timePop && (
        <Popup
          type={"danger"}
          handlClose={setTimePop}
          title={"PopUp"}
          text={"timer Popup ladies and gentelman"}
        />
      )}
    </div>
  );
}

export default App;
