import React,{useState,useEffect} from 'react';
import { UseSelector,useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';



import { Link } from 'react-router-dom';

const Product = () => {
  
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);

    
    useEffect(()=>{
        const getProduct=async()=>{
            setLoading(true);
            const response=await fetch(`https://dummyapi.online/api/movies/${id}`)
            setProduct(await response.json());
            setLoading(false);}
            getProduct();
        },[]);
        
        const Loading=()=>{
            return(
                <>
            <h1>Loading...</h1>            
                </>
            )
        }
    
    const ShowProduct = ()=>{
        return(
            <>
        
        <div className='col-md-6'>
            <img src= "images/shawshank.jpg" alt={product.title} height="400px" width="400px"/>
                
            </div>
            
        <div className='col-md-6'>
            <h4 className='text-uppercase text-success'>{product.movie}</h4>
            <h1 className='display-5'>{product.rating}</h1>

            <p className='lead'>Rating {product.rating&&product.rating.rate}&nbsp;<i className='fa fa-star'></i>

            </p>
            <h4 className='display-6 fw-bolder text-danger'>{product.movie}</h4>

            <p className='lead'>{product.description}</p>

           
            </div>
            
            </>
        )
    }
    
                     return(
                    <div>
                     <div className='container py-5'>
                      <div className='row py-5'>
                       {loading ?<Loading/>:<ShowProduct/>}

                    </div>
                     </div>
                     </div>
    )
    
    }

export default Product

