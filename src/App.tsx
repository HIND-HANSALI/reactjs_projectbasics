// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
// import Message from './Message';

//List Group
// import ListGroup from "./components/ListGroup";
// let items=['hind','hiba','zineb']

// function App(){
//   const handleSelectedItem=(item:string)=>{
//     console.log(item);
//   }
//   return <div><ListGroup items={ items}  heading="cities" onSelectItem={handleSelectedItem}/></div>;
// }
// export default App;


//Alert
import Alert from "./components/Alert";
function App(){
  return <div><Alert> hinnd <h1>tessst tag</h1> </Alert>

        </div>
}
export default App;