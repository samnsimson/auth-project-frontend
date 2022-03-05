import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Row,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
} from "reactstrap";

export const Mfa = () => {
    const [showButton, setShowButton] = useState(false);
    const {
        state: { id, qrcode },
    } = useLocation();

    useEffect(() => {
        console.log(id, qrcode);
    }, [id, qrcode]);

    return (
        <Row style={{ height: "100vh" }}>
            <Container className="d-flex h-100 align-items-center justify-content-center">
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col
                                    md={8}
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <Row>
                                        <div>
                                            <h5>
                                                Setup Two Factor Authentication
                                            </h5>
                                            <p>
                                                <small>
                                                    Please scan the QR Code with
                                                    your{" "}
                                                    <b>Google Authenticator</b>{" "}
                                                    app to setup 2 Factor
                                                    Authentication. Once setup
                                                    is complete, click the
                                                    checkbox below and continue
                                                    to login
                                                </small>
                                            </p>
                                            <Form>
                                                <FormGroup check>
                                                    <Input
                                                        type="checkbox"
                                                        onClick={(e) =>
                                                            setShowButton(
                                                                e.target.checked
                                                            )
                                                        }
                                                    />
                                                    <Label check>
                                                        Finished setting up 2FA
                                                    </Label>
                                                </FormGroup>
                                            </Form>
                                            <Link to={"/"}>
                                                <Button
                                                    type="button"
                                                    color="primary"
                                                    disabled={!showButton}
                                                >
                                                    Continue to login
                                                </Button>
                                            </Link>
                                        </div>
                                    </Row>
                                </Col>
                                <Col
                                    md={4}
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <img src={qrcode} alt="qr-code" />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        </Row>
    );
};
