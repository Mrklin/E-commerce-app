import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer';
import banner_men from './assets/Images/banner_mens.png'
import banner_women from './assets/Images/banner_women.png'
import banner_kid from './assets/Images/banner_kids.png'



function App() {


  return (
    <>
    
    <div className='w-full'>
    <BrowserRouter>
  
      <Navbar />

      <Routes>

      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={banner_men} category='men'/>}/>
      <Route path='/women' element={<ShopCategory banner={banner_women} category='women'/>}/>
      <Route path='/kids' element={<ShopCategory banner={banner_kid} category='kids'/>}/>

      <Route path='/products' element={<Products />}>
        <Route path=':productId' element={<Products />} />
      </Route>

      <Route path='/cart' element={<Cart/>}/>

      <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      
      <Footer />

     

    </BrowserRouter>
   
    </div>
    </>
  )
}

export default App
