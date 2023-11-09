// Params import to render the individual items
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const { id } = useParams();

  const [selectedOptions, setSelectedOptions] = useState({
    dessert: product.dessert,
    soupOption: null,
    mainFoodOption: null,
    secondaryFood: [],
    waterOption: null,
  });

  const [selectedSecondaryFood, setSelectedSecondaryFood] = useState([]);

  const secondaryFoodOptions = [
    product.secondaryFood1,
    product.secondaryFood2,
    product.secondaryFood3,
  ].filter(Boolean);

  const handleOptionChange = (optionName, optionValue) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: optionValue,
    }));
  };

  const handleAddToCart = () => {
    // Construct the URL with selected options as query parameters
    const queryParams = Object.keys(selectedOptions)
      .map((optionName) => `${optionName}=${selectedOptions[optionName]}`)
      .join("&");

    // Navigate to the cart screen with the selected options as query parameters
    navigate(`/cart/${id}?${queryParams}`);
  };

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
                  Descripción del producto: {product.description}{" "}
                  {product.dessert}
                </Card.Text>
                {/* Form here */}
                <Form>
                  <Form.Group>
                    <Form.Label>
                      Dessert: <strong>{product.dessert}</strong>
                    </Form.Label>
                    <Form.Check
                      type="radio"
                      label="Sí"
                      name="dessert"
                      id="dessert-yes"
                      checked={selectedOptions.dessert === "Sí"}
                      onChange={() => handleOptionChange("dessert", "Sí")}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="dessert"
                      id="dessert-no"
                      checked={selectedOptions.dessert === "No"}
                      onChange={() => handleOptionChange("dessert", "No")}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Soup Options:</Form.Label>
                    <Form.Check
                      type="radio"
                      label={product.soupOption1}
                      name="soupOption"
                      id="soup-option-1"
                      checked={
                        selectedOptions.soupOption === product.soupOption1
                      }
                      onChange={() =>
                        handleOptionChange("soupOption", product.soupOption1)
                      }
                    />
                    <Form.Check
                      type="radio"
                      label={product.soupOption2}
                      name="soupOption"
                      id="soup-option-2"
                      checked={
                        selectedOptions.soupOption === product.soupOption2
                      }
                      onChange={() =>
                        handleOptionChange("soupOption", product.soupOption2)
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Main food options:</Form.Label>
                    <Form.Check
                      type="radio"
                      label={product.mainFoodOption1}
                      name="mainFoodOption"
                      id="main-food-option-1"
                      checked={
                        selectedOptions.mainFoodOption ===
                        product.mainFoodOption1
                      }
                      onChange={() =>
                        handleOptionChange(
                          "mainFoodOption",
                          product.mainFoodOption1
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label={product.mainFoodOption2}
                      name="mainFoodOption"
                      id="main-food-option-2"
                      checked={
                        selectedOptions.mainFoodOption ===
                        product.mainFoodOption2
                      }
                      onChange={() =>
                        handleOptionChange(
                          "mainFoodOption",
                          product.mainFoodOption2
                        )
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formSecondaryFood">
                    <Form.Label>
                      Selecciona opciones de alimentos secundarios:
                    </Form.Label>
                    {/* Display secondary food options as checkboxes */}
                    {secondaryFoodOptions.map((option, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        label={option}
                        checked={selectedSecondaryFood.includes(option)}
                        onChange={() =>
                          setSelectedSecondaryFood((prevOptions) =>
                            prevOptions.includes(option)
                              ? prevOptions.filter((item) => item !== option)
                              : [...prevOptions, option]
                          )
                        }
                      />
                    ))}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Water Options:</Form.Label>
                    <Form.Check
                      type="radio"
                      label={product.waterOption1}
                      name="waterOption"
                      id="water-option-1"
                      checked={
                        selectedOptions.waterOption === product.waterOption1
                      }
                      onChange={() =>
                        handleOptionChange("waterOption", product.waterOption1)
                      }
                    />
                    <Form.Check
                      type="radio"
                      label={product.waterOption2}
                      name="waterOption"
                      id="water-option-2"
                      checked={
                        selectedOptions.waterOption === product.waterOption2
                      }
                      onChange={() =>
                        handleOptionChange("waterOption", product.waterOption2)
                      }
                    />
                  </Form.Group>
                  <br></br>
                  <Button variant="primary" onClick={handleAddToCart}>
                    Add To My Orders
                  </Button>
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
