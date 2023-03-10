import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';

//import data from '../data';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{loading, error,products },dispatch] = useReducer(logger,(reducer),{
    products: [],
    loading : true,
    error : '',
  
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/api/products');
        dispatch({type: 'FETCH_SUCCESS',payload: result.data});
      }catch(err) {
        dispatch({type: 'FETCH__FAIL',payload:err.message});
      }
  
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h>list product</h>
      <div className="products">
        {loading ? (
        <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
        products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={'/product/${product.skug}'}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={'/product/${product.skug}'}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
