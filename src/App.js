import Navbar from "./Components/Navbar";
import Timer from "./Components/Timer"
import './App.css';
import InputContainer from "./Components/InputContainer";
const App = ()=>{
    return (
        <div>
              <Navbar/>
              <Timer/>
              <InputContainer/>
        </div>
    )
}

export default App;