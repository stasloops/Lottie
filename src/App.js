import './App.css';
import Lottie from "lottie-react";
import  animation  from './dlf10_7x45GFUqeu.json'

function App() {
  const style = {
    height: 500,
  };
  return (
    <div className="App">
    <Lottie style={style} animationData={animation} />
    </div>
  );
}

export default App;
