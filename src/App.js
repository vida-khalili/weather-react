import "./App.css";
import "./style.css";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchEngine />
      <Footer/>
    </div>
  );
}

export default App;
