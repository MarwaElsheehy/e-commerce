import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const ProductDetails = ({addToCart}) => {
  const url = "https://fakestoreapi.com/products"
  const [product, setProduct] = useState([])
  const params = useParams();
  useEffect(() => {
    fetch(`${url}/${params.productId}`).then(res => res.json()).then(pro => setProduct(pro))
  }, []);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} width="400px" height="400px" />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
              {product.category}
            </h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="fw-bolder">
              Rating {product.rating && product.rating.rate}
              <FontAwesomeIcon icon={faStar} />
            </p>
            <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
            <p>{product.description}</p>
            <button className="btn btn-outline-dark" onClick={() => addToCart(product)}>Add To Cart</button>
            <NavLink to="/cart" className="btn btn-dark ms-2">Go To Cart</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
