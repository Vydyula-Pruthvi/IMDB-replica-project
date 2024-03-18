import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';



const Products = () => {
const [data,setData]=useState([]);
const [filter,setFilter]=useState(data);
const [loading,setLoading]=useState(false);


useEffect(()=>{
    const getProducts = async()=>{
        setLoading(true);

        const response= await fetch("https://dummyapi.online/api/movies");
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(data);
    }
getProducts();

},[])


const Loading = () => {
    return(
        <>
        <h1>Loading</h1>
        </>
    );
};

const filterProducts = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter (updatedList);
}
    const ShowProducts=()=>{
        return(
            <>

            {filter.map((product)=>{
                return(
                    <>

                    <div className='col-md-3'>
                    <div className='card h-100'>
                   {/* <img src={product.image} alt={product.title} height="300px"/> */}
                   <div className=' card-body text-bg-dark'>
                   <p className='card-text text-warning fw-bolder'>{product.movie}</p>
                    <div className='card-title text-danger'>Rating: {product.rating}</div>

                    
                    <Link to={`https://www.imdb.com/title/tt0111161/`} className='btn btn-outline-warning'> See Reviews </Link>

                   </div>
                    </div>
                    </div>
                    </>
                )
            })}


            
            </>
        )
        }

    return(
        
        <div>
            <div className='container py-3 my-3'>
                <div className='row'>

            <div className='col-sm-12'>
                <h2 className='display-4 text-center text-success m-2 p-1'> Latest Trending</h2>
            </div><br/><br/>
        <div className='row'>

        {loading ? <Loading /> : <ShowProducts />}

        </div>

                </div>
            </div>
        </div>
        
    )
}



export default Products