import React from "react";
import { Row, Container, Col } from "reactstrap";
import { NavigationBar } from "../components/NavigationBar";

const Homepage = () => {
    return (
        <div>
            <NavigationBar />
            <Row>
                <Container className="p-3">
                    <Col>
                        <h2>W3lcome Home!</h2>
                    </Col>
                </Container>
            </Row>
        </div>
    );
};

export default Homepage;
