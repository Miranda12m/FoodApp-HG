
  return (
    <div>
      <Link to="/home" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col xs={12} md={6}>
          <Card style={{ width: "100%", marginBottom: "20px", height: "100%" }}>
            <Card.Body>
              <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: "100%", objectFit: "cover" }} />
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

              {/* Form */}
              <Form>
                {/* Ice Cream Option */}
                <Form.Group controlId="formWantIceCream">
                  <Form.Check
                    type="checkbox"
                    label={`Do you want {ice cream of the day}?`}
                    checked={wantIceCream}
                    onChange={(e) => setWantIceCream(e.target.checked)}
                  />
                  {wantIceCream && (
                    <div style={{ padding: "10px 0" }}>
                      {/* Display ice cream content when the checkbox is checked */}
                      {/* For example, an image of ice cream */}
                      <img src="/images/cream01.jpg" alt="Ice Cream" style={{ width: "125px", height: "auto" }} />
                    </div>
                  )}
                </Form.Group>
                {/* Soup Checkbox */}
                <Form.Group controlId="formWantSoup">
                  <Form.Check
                    type="checkbox"
                    label="Do you want soup?"
                    checked={wantSoup}
                    onChange={(e) => setWantSoup(e.target.checked)}
                  />
                  {wantSoup && (
                    <div style={{ padding: "10px 0" }}>
                      <Form.Label>Select a soup option:</Form.Label>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {soupOptions.map((option, index) => (
                          <div
                            key={index}
                            style={{
                              border: selectedSoup === option.label ? "2px solid #D46C35" : "2px solid #ccc",
                              borderRadius: "5px",
                              padding: "10px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              cursor: "pointer",
                              backgroundColor: selectedSoup === option.label ? "#f0f0f0" : "white",
                            }}
                            onClick={() =>
                              setSelectedSoup(
                                selectedSoup === option.label ? "" : option.label
                              )
                            }
                          >
                            <img
                              src={option.image}
                              alt={option.label}
                              style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                            <span
                              style={{
                                marginTop: "5px",
                                fontWeight: "bold",
                                color: selectedSoup === option.label ? "#D46C35" : "black",
                              }}
                            >
                              {option.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Form.Group>

                <br></br>
                {/* Main Food Option */}
                <Form.Group controlId="formMainFood">
                  <div style={{ padding: "10px 0" }}>
                    <Form.Label>Select the main food option:</Form.Label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {mainFoodOptions.map((option, index) => (
                        <div
                          key={index}
                          style={{
                            border: selectedMainFood === option.label ? "2px solid #D46C35" : "2px solid #ccc",
                            borderRadius: "5px",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            cursor: "pointer",
                            backgroundColor: selectedMainFood === option.label ? "#f0f0f0" : "white",
                          }}
                          onClick={() =>
                            setSelectedMainFood(
                              selectedMainFood === option.label ? "" : option.label
                            )
                          }
                        >
                          <img
                            src={option.image}
                            alt={option.label}
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                          />
                          <span
                            style={{
                              marginTop: "5px",
                              fontWeight: "bold",
                              color: selectedMainFood === option.label ? "#D46C35" : "black",
                            }}
                          >
                            {option.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Form.Group>

                <br></br>
                {/* Secondary Food options */}
                <Form.Group controlId="formSecondaryFood">
                  <Form.Label>Choose secondary food:</Form.Label>
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
                <br></br>
                {/* Water Options */}
                <Form.Group controlId="formWater">
                  <Form.Label>Choose water option:</Form.Label>
                  {/* Display water options as checkboxes */}
                  {waterOptions.map((option, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={option.label}
                      checked={selectedWater === option.value}
                      onChange={() => setSelectedWater(option.value)}
                    />
                  ))}
                </Form.Group>
                <br></br>
                {/* Bread Pieces */}
                <Form.Group controlId="formBreadPieces">
                  <Form.Label>How many pieces of bread do you want?</Form.Label>
                  <Form.Control
                    type="number"
                    value={breadPieces}
                    onChange={(e) => {
                      const newValue = Math.max(0, Math.min(9, parseInt(e.target.value)));
                      setBreadPieces(newValue);
                    }}
                  />
                </Form.Group>
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