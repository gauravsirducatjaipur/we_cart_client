import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/cartslice'
import { useNavigate } from 'react-router-dom'
import { userData } from '../redux/userslice'

function Products() {

  const [items, setItems] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products")

      // console.log("response is", response)
      // console.log("response data is", response.data)
      setItems(response.data)
    }

    getData()

  }, [])



  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    if (!token) {
      navigate('/login')
    }
    else {
      if (!user) {
        axios.get('http://localhost:1300/api/user', { headers: { Authorization: `Bearer ${token}` } })
          .then((res) => { dispatch(userData(res.data.user)) })
          .catch((err) => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/login')
          })
      }


    }

  }, [])



  if (items.length === 0) {
    return <h1>Loading...</h1>
  }


  const handleAddToCart = (product) => {
    dispatch(addtocart(product))
  }

  return (
    <>
      <div className='d-flex justify-content-between flex-wrap gap-5'>
        {
          items.map((item, index) => {
            return (
              <div className="card" style={{ width: "20rem" }} key={index}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-sm btn-dark d-block" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default Products