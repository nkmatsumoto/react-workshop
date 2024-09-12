import './index.css';
import * as ReactDOM from "react-dom/client";
import App from './App';


function App() {

  // const name = props.name;
  // const age = props.age;

  // var destructuring
  // const {name, age} = props;
  return (
    <div>
      <h1>App</h1>
    </div>
 );
}

const rootContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);



// import './index.css';
// import * as ReactDOM from "react-dom/client";

// function Hello({name, age}) {

//   // const name = props.name;
//   // const age = props.age;

//   // var destructuring
//   // const {name, age} = props;
//   return (
//     <div>
//       <h1>Hello {name}, {age} years old</h1>
//     </div>
//  );
// }

// const rootContainer = document.querySelector("#root");
// const root = ReactDOM.createRoot(rootContainer);
// root.render(<Hello name="Max" age="21" />);
