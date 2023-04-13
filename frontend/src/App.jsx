import "./App.css";
import Responses from "./assets/components/Responses";
import Score from "./assets/components/Score";

function App() {
  return (
    <div className="bg-primary flex justify-center">
      <div className="bg-primary flex flex-col w-11/12">
        <Responses />
        <Score />
      </div>
    </div>
  );
}

export default App;
