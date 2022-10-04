import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { get } from "../services/api.service";

const Home = () => {
  get("/");
  return (
    <Container style={{ height: "60vh", width: "100%" }}>
      <Container
        className="d-flex flex-column justify-content-center align-items-center "
        style={{ height: "100%", width: "100%" }}
      >
        <Row className="mb-3">
          <Col>
            <h1 className="display-2">SHOP APP</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn btn-dark">
              <Link
                to="/store"
                style={{ color: "white", textDecoration: "none" }}
              >
                shop now
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
