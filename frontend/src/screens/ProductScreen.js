// Params import to render the individual items
import { useParams } from "react-router-dom";
// Link import to render
import { Link } from "react-router-dom";
// Bootstrap import to the card comps
import { Row, Col, Card, Form, Button, FormCheck } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { listProductDetails } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ProductScreen() {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const { id } = useParams();

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/home" className="btn btn-light my-3">
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col xs={12} md={6}>
            <Card
              style={{ width: "100%", marginBottom: "20px", height: "100%" }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{ width: "100%", marginBottom: "20px" }}>
              <Card.Body>
                <Card.Title>
                  <strong>{product.name}</strong>
                </Card.Title>
                <Card.Text></Card.Text>
                <Card.Text>
                  Descripción del producto: {product.description} {product.dessert}
                </Card.Text>
                {/* Form here */}
                <Form>
                  {/* Add more dynamic form fields here based on your data */}
                  <Button variant="primary">Add To My Orders</Button>
                  <br></br>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductScreen;
