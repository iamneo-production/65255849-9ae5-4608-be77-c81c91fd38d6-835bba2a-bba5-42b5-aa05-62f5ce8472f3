import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';
import Aboutus from './Components/Pages/Aboutus';
import Contact from './Components/Pages/Contact';
import Dashboard from './Components/Pages/Dashboard';
import FAQ from './Components/Pages/FAQ';
import Products from './Components/Pages/Products';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
import PrivacyandSetting from './Components/Pages/PrivacyandSetting';
import Feedback from './Components/Pages/FeedBack';
import Help from './Components/Pages/Help';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path="/" element ={<Home />}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path="/signup" element ={<Signup />}></Route>
         <Route path='/home' element={<Home/>}></Route>
         <Route path="/contact" element ={<Contact />}></Route>
         <Route path='/about' element={<Aboutus/>}></Route>
         <Route path='/Dashboard' element={<Dashboard/>}></Route>
         <Route path='/Products' element={<Products/>}></Route>
         <Route path='/FAQ' element={<FAQ/>}></Route>
         <Route path='/PrivacyandSetting' element={<PrivacyandSetting/>}></Route>
         <Route path='/FeedBack' element={<Feedback/>}> </Route>
         <Route path='/Help' element={<Help/>}> </Route>
       </Routes>
   </BrowserRouter>

      </div>
      </Provider>
    
  );
}

export default App;