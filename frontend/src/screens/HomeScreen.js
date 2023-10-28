import React, {useState, useEffect} from 'react'
// React-Bootstrap import
import {Row, Col} from 'react-bootstrap'
// Product individual
import Product from '../components/Product';
// Axios imnnport
import axios from 'axios'




function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(()=>{

    async function fetchProducts(){
      const { data } = await axios.get('/api/products/')
      setProducts(data)
    }

    fetchProducts()
  }, [])
  return (
    <div>
        <h1>Weekly Menu</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen

// mhmhmhmhmhmh.... 