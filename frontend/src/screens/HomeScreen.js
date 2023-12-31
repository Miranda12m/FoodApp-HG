import React, { useEffect} from 'react'
// React-Bootstrap import
import {Row, Col} from 'react-bootstrap'
// Product individual
import Product from '../components/Product';
import Loader from '../components/Loader'
import Message from '../components/Message'
//ProductActions 
import { listProducts } from '../actions/productActions'
// Redux stuff
import { useDispatch, useSelector } from 'react-redux'

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(()=>{
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
        <h1>Weekly Menu Putos</h1>
        {loading ? <Loader/>
          : error ? <Message variant='danger'>{error}</Message>
            :
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        }
    </div>
  )
}

export default HomeScreen

// mhmhmhmhmhmh.... 