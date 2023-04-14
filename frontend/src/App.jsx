import Header from "./components/Header";
import UserResponse from "./components/UserResponse";
import Footer from "./components/Footer";
import "./App.css";
import Responses from "./components/Responses";
import Score from "./components/Score";

function App() {
  return (
    <div className="h-screen bg-primary flex flex-col justify-center">
      <Header />
      <UserResponse />
      <div className="bg-primary flex flex-col w-11/12">
        <Responses />
        <Score />
      </div>
      <Footer />
    </div>
  );
}

export default App;
