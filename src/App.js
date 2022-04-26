import logo from './logo.svg';
import './App.css';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';
function App() {
  return (
    <div className="App">
      
      <Buttons text="Cancel"/>
      <Buttons text="Sell"/>
      <Buttons text="Set Action"/>
      <Buttons text="Delist"/>
      <Buttons text="Approve"/>
      <Buttons text="Ok"/>
      <Buttons text="Creat"/>
      <Inputs text="Last Name"/>
      <Inputs text="Email Address"/>
      <Inputs text="Email Confirm"/>

    </div>
  );
}

export default App;
