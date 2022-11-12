import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./Detail";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">shoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">
              <Link to="/">홈</Link>
            </Nav.Link>
            <Nav.Link href="#feature">Cart</Nav.Link>
            <Nav.Link href="/detail">
              <Link to="/detail">상세</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route />
      </Routes>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="main-bg"></div>
              </div>

              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        alt="신발1"
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
