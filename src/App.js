import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Product />
    </div>
  );
}

export default App;
