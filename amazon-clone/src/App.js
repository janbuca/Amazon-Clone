import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';





function App() {
  return (

    <Router>
    <div className="App">
      <Routes>
      
        <Route path="Login" element = {<Login />}/> 
        <Route path="/" element = {<> <Header /> <Home /> </>}/>
        <Route path="/Checkout" element = {<> <Header /> <Checkout/> </>}/>
        {/* <Route  path="/Payment" element = {<> <Header/>
          <Elements stripe={promise}>
            <Payment />
          </Elements> </>} />
        <Route  path="/orders" element = {<> <Header/> <Orders /> </>} /> */}

      </Routes>				
    </div>
  </Router>




    // <div >
      // <Header/>
      // <Home/>
      

     
      
    // </div>
  );
}

export default App;
