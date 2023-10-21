import Navbar from "./Components/Navbar";
import Timer from "./Components/Timer"
import './App.css';
import InputContainer from "./Components/InputContainer";
import WordController from "./Components/WordController";
import Footer from "./Components/Footer";
const App = ()=>{
    return (
        <div>
              <Navbar/>
              <Timer/>
              <InputContainer/>
              <WordController/>
              <Footer/>
        </div>
    )
}

export default App;