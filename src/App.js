import './App.css';
import {Greetings} from './Components/Greetings';
import {Message} from './Components/Message';
import {Action} from './Components/Action';

function App() {
  return (
    <div className="App">
     <Greetings name="Andrew" />
     <Message text="Pizza is God food" />
     <Action onClick={() => {
      console.log("Aaaaaaaaaa")
     }}/>
    </div>
  );
}

export default App;
