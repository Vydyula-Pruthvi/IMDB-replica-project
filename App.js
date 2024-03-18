import React from 'react'
import Header from './IMDB/Header'
import Product from './IMDB/Buynw';
import Products from './IMDB/Fetching';



import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


const App=()=>{
return(
<>



     <Router>
        <Header/>
        <Routes>
          
          
          <Route path='/Products' element={<Products/>}></Route>
          <Route path='/Products/:id' element={<Product/>}></Route>

        </Routes>
        
          </Router> 


</>
)
  
}

export default App