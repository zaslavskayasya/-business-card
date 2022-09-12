import logo from './logo.svg';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import {HashRouter} from 'react-router-dom';

// function App() {
//   return ( 
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and saver to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
// );
// }

// export default App;
