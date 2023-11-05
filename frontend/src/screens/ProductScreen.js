// Params import to render the individual items
import { useParams } from "react-router-dom";
// Link import to render
import { Link } from "react-router-dom";
// Bootstrap import to the card comps
import { Row, Col, Card, Form, Button, } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import axios from "axios";

function ProductScreen() {

  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        // Handle errors here
      }
    }

    fetchProduct();
  }, [id]);

  return (
    <div>
      <Link to="/home" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col xs={12} md={6}>
          <Card style={{ width: "100%", marginBottom: "20px", height: "100%" }}>
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
                Descripción del producto: {product.description}
              </Card.Text>

              {/* Form here */}

              <Form>
                {/* Ice Cream Option */}

                {/* Soup Checkbox */}
                
                <br></br>
                {/* Other details */}
                <Button variant="primary">Add To My Orders</Button>
                <br></br>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
