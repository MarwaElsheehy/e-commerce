import React, { useEffect, useState } from 'react'
import Slider from '../../components/Home/Slider'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(pro => setProducts(pro))
  }
  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories").then(res => res.json()).then(pro => setCategories(pro))
  }
  const getProductCatogory = (cat) => {
    fetch(`https://fakestoreapi.com/products/category/${cat}`).then(res => res.json()).then(pro => setProducts(pro))
  }
  useEffect(() => {
    getProducts();
    getCategories();
  }, [])
  return (
    <>
      <Slider />
      <div className="container">
        <button onClick={() => { getProducts() }} type="button" className="btn btn-outline-primary m-3">All</button>
        {
          categories.map((category) => {
            return (
              <button onClick={() => { getProductCatogory(category) }} key={category} type="button" className="btn btn-outline-primary m-3">{category}</button>
            )
          })
        }
        <div className="row">
          {products.map((product) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} class="card-img-top" height="250px" />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                      <p className="card-text">${product.price}</p>
                      <Link to={`/product/${product.id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage
