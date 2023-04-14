import Header from "./components/Header";
import UserResponse from "./components/UserResponse";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="h-screen bg-primary">
      <Header />
      <UserResponse />
      <Footer />
    </div>
  );
}

export default App;
