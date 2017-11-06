// import React, { Component } from 'react';
// //import logo from './logo.svg'; 
// // import './home.css'; 
// import Kids from "./web-pages";
// import Buttons from "./components/Buttons/buttons";
// import Nav from "./components/Nav/nav";


// class Home extends Component { 
//   render() { return (

// <div className="container">
//   <div>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       {/* <a className="navbar-brand" href="#">Code 4 Kids</a> */}
//        <button class="btn btn-outline-success navbar-toggler" data-toggle="collapse" type="button">s
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//           {/* <a className="nav-item nav-link active" href="#">Home
//             <span className="sr-only">(current)</span>
//           </a> */}
//           {/* <a className="nav-item nav-link" href="#">Home</a>
//           <a className="nav-item nav-link" href="#">Log In</a>
//           <a className="nav-item nav-link disabled" href="#">Sign Up</a> */}
//         </div>
//       </div>
//     </nav>
//   </div>
//   <Kids />
//   <Buttons />
//   <Nav />
// </div>
// ); } } export default Home;


// // const App = () => {

// // <Router>

// // <div>
// // <Route exact path="/" component={Home}/>
// // </div>

// // </Router>

// // }

// // export default App;



import React, { Component } from 'react'; // import logo from './logo.svg'; 
import Kids from "./pages/web-pages";
// import Buttons from "./components/Buttons/buttons.js";
// import Nav from "./components/Nav/nav.js";
// import Modal1 from "./components/Modal1/login.js";
// import Modal2 from "./components/Modal2/signup.js";
// import CodeButtons from "./components/code-buttons/code-buttons.js";
// import { Button } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class App extends Component { 
  render() { return (

<div className="container">
<nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">Code 4 Kids</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="home.html">Home</a>
              </li>
              <li>
              <a href="../login.html" type="button" class="btn btn-primary">Log in</a>
              <a href="../signup.html" type="button" class="btn btn-secondary">Sign up</a>  
            </li>
            </ul>
          </div>
        </div>
      </nav>
<Kids />

{/* <CodeButtons />
<Buttons />
  <Nav/> 
    <Modal1 />
    <Modal2 /> */}

</div>
); } } export default App;