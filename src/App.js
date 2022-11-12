import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import data from "./data";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">shoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#feature">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div>
        <div className="main-bg"></div>
      </div>

      <div className="container">
        <div className="row">
          <Card shoes={shoes}></Card>
          <div className="col-md-4">
            <img
              alt="신발1"
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        alt="신발1"
        src="https://codingapple1.github.io/shop/shoes1.jpg"
        width="80%"
      />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].content}</p>
      <p>{props.shoes[0].price}</p>
    </div>
  );
}

export default App;
