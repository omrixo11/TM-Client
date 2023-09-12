import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/Login';
import TapTop from './components/tapTop';
import ShopLeftSideBar from './pages/ShopLeftSideBar';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Product from './components/product';
import MobileBottomMenu from './components/mobileBottomMenu';
import AccountActivation from './pages/AccountActivation';
import ResetPassword from './components/userAuth/resetPassword';
import Cart from './components/Cart';
import WishList from './components/WishList'; 


function App() {
  return (
<>
  <Router>
     <Header/>
     <mobileFix/>
     <MobileBottomMenu/>
      <Routes>
         <Route path='/' exact element={<Home/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Shop' element={<ShopLeftSideBar/>}/>
         <Route path='/Signup' element={<Signup/>}/>
         <Route path='/Forgot' element={<Forgot/>}/>
         <Route path='/Error' element={<Error/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Product' element={<Product/>}/>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/WishList' element={<WishList/>}/>
         {/* <Route path='/AccountActivation/:verificationcode' element={<AccountActivation/>}/> */}
         <Route path='/reset-password/:token' element={<ResetPassword/>}/>
      </Routes>
    <Footer/>
    <TapTop/>
    </Router>
    <Toaster />

  
   
</>
  );
}

export default App;
