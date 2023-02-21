import './App.css';
// import Counter from './components/Counter';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {

  // tihs is internal css for react components
  const stylespan = {
    color:"orange",
    background:"lightgrey",
    height:"100vh",
    width:"100%"
  }
// tihs is internal css for react components


// template literals use back ticks to represent ``
// for dynamic content addition like variables below example
 const firstvariable = "Iam a React Developer";
 const secondvariable = "I am prasanth";
  const [result, setResult] = useState("");

  const clickhandler = (event) =>{
    setResult(result.concat(event.target.value));
  }
  const clr = () =>{
    setResult("");
  }
  const calculate = () =>{
    setResult(eval(result).toString()) //heer we evaluting the result and then converts into a string
  }

  const [num, setNum] = useState(4);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
 
  useEffect(()=>{
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });
  const changehandler = (eve) =>{
    setNum(eve.target.value)
  }
  return (
    <>
    <div style={stylespan} className="App">
    <Header />
      <h1 style={{margin:"0"}}>hello world</h1>
      
      <p>{` the desire was accomplished ${secondvariable} ${firstvariable}`}</p>{/* this is template literal*/}
      {/* <Counter /> */}
      <div className='calc'>
        <input type='text' placeholder='0' id='answer' value={result}/>
        <input type='button' value='9' className='button' onClick={clickhandler}/>
        <input type='button' value='8' className='button' onClick={clickhandler}/>
        <input type='button' value='7' className='button' onClick={clickhandler}/>
        <input type='button' value='6' className='button' onClick={clickhandler}/>
        <input type='button' value='5' className='button' onClick={clickhandler}/>
        <input type='button' value='4' className='button' onClick={clickhandler}/>
        <input type='button' value='3' className='button' onClick={clickhandler}/>
        <input type='button' value='2' className='button' onClick={clickhandler}/>
        <input type='button' value='1' className='button' onClick={clickhandler}/>
        <input type='button' value='0' className='button' onClick={clickhandler}/>

        <input type='button' value='+' className='button' onClick={clickhandler}/>
        <input type='button' value='-' className='button' onClick={clickhandler}/>
        <input type='button' value='/' className='button' onClick={clickhandler}/>
        <input type='button' value='*' className='button' onClick={clickhandler}/>
        <input type='button' value='%' className='button' onClick={clickhandler}/>
        <input type='button' value='.' className='button' onClick={clickhandler}/>

        <input type='button' value='CLR' className='button button1' onClick={clr}/>
        <input type='button' value='=' className='button button1' onClick={calculate}/>
      </div>
      <h1 style={{color:"yellow"}}>pokemon API data fetching</h1>
      <h2>You have selected {num}</h2>
      <h3>My Name is <span style={{color:"red"}}>{name}</span></h3>
      <h3>I have <span style={{color:"red"}}>{moves}</span></h3>
      <select name='' id='' onChange={changehandler}>
        <option value='ditto'>ditto</option>
        <option value='0'>0</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
      </select>
    </div>
    </>
  );
}

export default App;
