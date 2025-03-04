
import './App.css';
import FirstComp from './FirstComp';
import SecondComp from './Usestatehook';
import ThirdComp from './ThirdComp';
import FourthComp from './Useeffecthook';
import Usestatehook from './Usestatehook';
import Useeffecthook from './Useeffecthook';

const add={
  newname : 'Krishna',
  city: 'Chennai',
  work: 'Developer'
}

function App() {
  return (
    <div className="App">
      {/* <FirstComp  add={add.city}/>  */}
      <Usestatehook /> 
      {/* <ThirdComp country='USA'/> */}
      <Useeffecthook/>
    </div>
  );
}

export default App;


