import { useRef, useState } from 'react';
import './App.css';

function App() {
  //배열을 반환 [state, f]
  const [state, setState] = useState(10); 
  
  // console.log(state);
  // console.log(setState);
  const styleobject = {
    fontSize: "52px"
  }
  let number = 10;
  const ref = useRef(10);
  const addNumber = () => {
    number += 1;
    console.log(number);
    ref.current++;
    console.log(ref.current);
    setState(state+1);
  }
  return (
    <>
      <div className="App">
        <h2 style={{fontSize: "42px"}}>안녕하세요</h2>
        <p style={styleobject}>p입니다.</p>
        <p>변수 {number}</p>
        <p>러프 {ref.current}</p>
        <p>상태 {state}</p>
        <button onClick={addNumber}>클릭하세요</button>
      </div>
      <div>dddd</div>
    </>
  );
}

export default App;
