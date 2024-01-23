import './App.css';
import Checkout from './Componets/Checkout/Checkout';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function App() {
  return (

    <Router>
    <div className="App">
      <Routes>
      
        {/* <Route path="Login" element = {<Login />}/>  */}
        <Route path="/" element = {<> <Header /> <Home /> </>}/>
        <Route path="/Checkout" element = {<> <Header /> <Checkout /> </>}/>
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
