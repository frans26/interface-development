import "./App.css";

import "./assets/fonts/OpenSans/OpenSans-Regular.ttf";
import "./assets/fonts/OpenSans/OpenSans-Light.ttf";

import Headline from "./components/headline/Headline";
import Latest from "./components/latest/Latest";

function App() {
  return (
    <main>
      <Headline />
      <Latest />
    </main>
  );
}

export default App;
