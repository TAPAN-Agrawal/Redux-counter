import logo from './logo.svg';
import './App.css';
import {  useDispatch, useSelector } from 'react-redux';
import { add, addArray, decrement, increment } from './actions/index';

function App() {

  const c = useSelector(state=>state.count.c)
  const m=useSelector(state=>state.count.msg)
  const dispatch = useDispatch()

const arr =[ 6,7,8,9,10]
console.log(useSelector(state=>state.count.arr));

  return (
    <div className="App">
            {c}   
            {m} 
            <button onClick={()=>dispatch(increment())}>++</button>  
            <button onClick={()=>dispatch(decrement())}>--</button>  
            <button onClick={()=>{dispatch(add("hello"))}}>add data</button>
            <button onClick={()=>{dispatch(addArray(arr))}}>add complex data</button>

    </div>
  );
}

export default App;
