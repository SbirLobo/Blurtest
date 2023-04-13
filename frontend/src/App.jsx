import "./App.css";
import Responses from "@assets/components/Responses";
import Score from "@assets/components/Score";

function App() {
  return (
    <div className="bg-primary flex justify-center">
      <div className="bg-primary w-6/12 flex flex-col">
        <Responses />
        <Score />
      </div>
    </div>
  );
}

export default App;
