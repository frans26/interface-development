import "./App.css";

import "./assets/fonts/OpenSans/OpenSans-Regular.ttf";
import "./assets/fonts/OpenSans/OpenSans-Light.ttf";

import Headline from "./components/headline/Headline";
import Latest from "./components/latest/Latest";

function App() {
  return (
    <main>
      <div className="flex flex-col items-center p-6">
        <Headline />
        <Latest />
      </div>
    </main>
  );
}

export default App;
