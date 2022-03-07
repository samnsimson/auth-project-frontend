import React from "react";
import { Card, CardBody, CardText, Col, Container, Row } from "reactstrap";
import backgroundImage from "../images/background.jpg";

export const _404 = () => {
    return (
        <Row
            style={{
                height: "100vh",
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: `center center`,
                backgroundSize: `cover`,
            }}
        >
            <Container className="d-flex align-items-center justify-content-center">
                <Col md={4}>
                    <Card>
                        <CardBody>
                            <CardText className="text-center">
                                <h1>Oops!</h1>
                                <h4>
                                    The page you are looking for is not found
                                </h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        </Row>
    );
};
