import { useState } from "react";
import Card from "./components/Card/Card";
import frameworks from "./assets/datanew.json";

import "./App.css";

function App() {
  const GetAppRamdon = (min, max) => {
    const amplitude = max - min;
    const randomnumber = min + Math.round(Math.random() * amplitude);
    return randomnumber;
  };

  const [indexVisibleFramework, setFrameworkVisible] = useState(
    GetAppRamdon(0, frameworks.length - 1)
  );

  const changeFramework = () => {
    setFrameworkVisible(GetAppRamdon(0, frameworks.length - 1));
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${frameworks[indexVisibleFramework].weblink})`}}> 
      <h1>Frases del Universo</h1>
      <Card
        framework={frameworks[indexVisibleFramework]}
        changeFramework={changeFramework}
      />
    </div>
  );
}

export default App;
